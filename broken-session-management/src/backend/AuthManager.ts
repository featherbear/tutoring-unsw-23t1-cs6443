import type { Arbitrary, Password } from "../types/binds";
import SessionManager from "./SessionManager";

export type UserStore = { [username: string]: Password }

export class AuthError extends Error { }

class AuthManager {
    #userStore: UserStore
    #sessionManager: SessionManager
    constructor(userStore: UserStore) {
        this.#userStore = userStore
        this.#sessionManager = new SessionManager
    }

    login(username: string, password: Password) {
        if (!username || !password) return null
        if (this.#userStore[username] === password) {
            return this.#sessionManager.createSession(username)
        }

        // Could throw an AuthError here
        return null
    }

    withSession<T>(sessionKey: Arbitrary, func: (this: SessionManager, authObject: ReturnType<SessionManager['checkSession']>) => T): T {
        let activeSession = this.#sessionManager.checkSession(sessionKey)
        if (!activeSession) {
            throw new AuthError("Not authenticated")
        }

        return func.call(this.#sessionManager, activeSession)
    }
}

export default AuthManager