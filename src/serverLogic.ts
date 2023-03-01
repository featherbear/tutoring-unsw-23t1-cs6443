import { Router } from "express"
import AuthManager, { UserStore } from "./components/AuthManager"
import logger from "./components/logging"

const userStore: UserStore = {
    // FIXME: Obviously we shouldn't store the passwords in plain-text
    "admin": "admin",
    "user": "user"
}
let auth = new AuthManager(userStore)
logger.debug("Users created", userStore)

let root = Router()

root.post("/login", (req, res) => {
    const { username, password } = req.body
    let response = auth.login(username, password)

    if (response) {
        logger.info("Login success", { username })
        return res.json({
            status: true,
            token: response
        })
    } else {
        logger.warn("Login fail", { username })

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