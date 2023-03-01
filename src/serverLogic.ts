import { Router } from "express"
import AuthManager, { UserStore } from "./backend/AuthManager"
import logger from "./backend/logging"

const userStore: UserStore = {
    // FIXME: Obviously we shouldn't store the passwords in plain-text
    "admin": "admin",
    "user": "user"
}
let auth = new AuthManager(userStore)
logger.debug(userStore, "Users created")

let root = Router()

root.post("/login", (req, res) => {
    const { username, password } = req.body

    let response = auth.login(username, password)

    if (response) {
        logger.info({ username }, "Login success")
        return res.json({
            status: true,
            token: response
        })
    } else {
        logger.warn({ username }, "Login fail")

        return res.json({
            status: false
        })
    }
})

root.get("/me", (req, res) => {
    try {
        // Get the auth token
        let token = req.headers.authorization?.split(" ")[1]
        return auth.withSession(token, ([username]) => {
            return res.json({
                status: true,
                username
            })
        })
    } catch (e) {
        return res.json({
            status: false,
            error: (<Error>e)?.message ?? "An error occurred"
        })
    }
})

export default root