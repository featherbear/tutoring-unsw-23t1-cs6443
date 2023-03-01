import AuthManager from "./components/AuthManager"

let auth = new AuthManager(
    {
        // FIXME: Obviously we shouldn't store the passwords in plain-text
        "admin": "admin",
        "user": "user"
    }
)

export default {}