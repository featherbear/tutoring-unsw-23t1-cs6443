//#region imports
import polka from 'polka'
import redirect from '@polka/redirect'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import fs from 'fs'
import { createQuery, init } from './database'
import crypt from './dodgyCrypto'

//#endregion

const server = polka()
let db = init();

function createDoLoginHandler(queryCreator: (username, password) => string, silent: boolean = false) {
    return (req, res) => {
        const { username, password } = req.body
        const OK = (data) => res.end(JSON.stringify({ status: true, auth: data }))
        const FAIL = (err) => res.end(JSON.stringify({ status: false, message: err }))

        const query = queryCreator(username, password)

        try {
            let result = db.prepare(query).get()
            if (result) return OK(crypt.encrypt(result))
        } catch (e) {
            console.warn("SQL Error logged - " + e.toString());
            if (!silent) return FAIL(e.toString())
        }

        return FAIL("Username or password incorrect")
    }
}

server.post('/doLogin/t1', createDoLoginHandler((username, password) =>
    createQuery`SELECT username, password FROM users WHERE username = '${username}' AND password = '${password}'`))

server.post('/doLogin/t2', createDoLoginHandler((username, password) =>
    createQuery`SELECT username, password FROM users WHERE (username = '${username}' AND password = '${password}')`))

server.post('/doLogin/t3', createDoLoginHandler((username, password) =>
    createQuery`SELECT username, password FROM users WHERE username = '${username.replace(/OR/gi, '')}' AND password = '${password.replace(/OR/gi, '')}'`, true))


//#region Server
server.use(bodyParser.json())
server.use(cookieParser())

server.get('/', (req, res) => {
    let username = res['auth'].username
    if (username == "USER_DOESNT_EXIST") username += "... wait how did you get here?"
    res.end(fs.readFileSync('site/_root.html').toString().replace("${USERNAME}", username))
})

server.get('/login', (req, res) => {
    res.end(fs.readFileSync('site/login.html'))
})

server.get('/playground', (req, res) => {
    res.end(fs.readFileSync('site/playground.html'))
})


server.post('/playground', (req, res) => {
    const { query: queryString } = req.body

    let query = createQuery(queryString)

    try {
        let result = db.prepare(query).all()
        return res.end(JSON.stringify({ data: result }))
    } catch (e) {
        if (e.message === "This statement does not return data. Use run() instead") {
            try {
                let result = db.prepare(query).run()
                return res.end(JSON.stringify({ data: result }))
            } catch (e) {
                console.warn("SQL Error logged - " + e.toString());
                return res.end(JSON.stringify({ data: e.toString() }))
            }
        }
        console.warn("SQL Error logged - " + e.toString());
        return res.end(JSON.stringify({ data: e.toString() }))
    }
})


/**
 * Auth
 */
server.use((req, res, next) => {
    if (["/login", "/playground"].includes(req.path)) return next()
    if (req.path.startsWith('/doLogin/')) return next()

    const { auth: authCookie } = req.cookies
    if (!authCookie) return redirect(res, "/login")

    if (!(res['auth'] = crypt.decrypt(authCookie))) return redirect(res, "/login")

    next();
})


export default function listen() {
    let HOST = process.env["HOST"] || "0.0.0.0"
    let PORT = process.env["PORT"] || 7000
    server.listen(PORT, HOST, () => {
        console.info(`Server listening on ${HOST}:${PORT}`)
    })
}
//#endregion