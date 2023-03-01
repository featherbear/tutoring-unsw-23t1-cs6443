import { nanoid } from 'nanoid'
import type { Arbitrary } from "../types/binds"

interface SessionID extends Number {}

interface SessionType {
    sessionKey: Arbitrary // TODO: Why is this insecure?
    // sessionHash: Arbitrary

    sessionID: SessionID
}

class SessionManager {
    #storage: { [username: string]: Array<SessionType> }
    #sessionCounter: number & SessionID
    constructor() {
        this.clearSessions()
        this.#sessionCounter = 0
    }

    dumpSessions() {
        return this.#storage
    }

    getSessions(username: string) {
        return this.#storage[username] ?? []
    }

    checkSession(sessionKey: Arbitrary, username?: string): [string, SessionID] | null {
        for (let target of (username ? [username] : Object.keys(this.#storage))) {
            for (let session of (this.#storage[target] ?? [])) {
                if (session.sessionKey !== sessionKey) continue
                return [target, session.sessionID]
            }
        }

        return null
    }

    createSession(username: string): Arbitrary {
        const sessionKey: Arbitrary = nanoid()
        const sessionID: SessionID = ++this.#sessionCounter

        this.#storage[username] = [...this.#storage[username], { sessionKey, sessionID }]

        return sessionKey
    }

    deleteSession(username: string, sessionID: SessionID) {
        this.#storage = {
            ...this.#storage,
            [username]: (this.#storage[username] ?? [])
                .filter(
                    (obj) => obj.sessionID !== sessionID
                )
        }
    }

    clearSessions(username?: string) {
        if (username) {
            delete this.#storage[username]
        } else {
            this.#storage = {}
        }
    }
}

export default SessionManager