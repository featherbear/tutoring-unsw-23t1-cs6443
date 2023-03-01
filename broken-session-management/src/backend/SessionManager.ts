import { nanoid } from 'nanoid/index'
import type { Arbitrary } from "../types/binds"
import logger from './logging'

interface SessionID extends Number { }

interface SessionType {
    /**
     * @deprecated - Why is this insecure? How to fix?
     */
    sessionKey: Arbitrary

    sessionID: SessionID
}

class SessionManager {
    #storage: { [username: string]: Array<SessionType> }
    #sessionCounter: number & SessionID

    constructor() {
        this.clearSessions(null, false)
        this.#sessionCounter = 0
    }

    /**
     * @private
     */
    dumpSessions() {
        return this.#storage
    }

    getSessions(username: string) {
        return this.#storage[username] ?? []
    }

    checkSession(sessionKey: Arbitrary, username?: string): [string, SessionID] | null {
        for (let target of (username ? [username] : Object.keys(this.#storage))) {
            for (let session of (this.#storage[target] ?? [])) {

                // TODO: Do we need to fix this?
                if (session.sessionKey !== sessionKey) continue

                return [target, session.sessionID]
            }
        }

        return null
    }

    createSession(username: string): Arbitrary {
        const sessionKey: Arbitrary = nanoid()
        const sessionID: SessionID = ++this.#sessionCounter

        this.#storage[username] = [...(this.#storage[username] ?? []), { sessionKey, sessionID }]

        logger.info({ sessionKey, sessionID, username }, "Created session")
        return sessionKey
    }

    deleteSession(username: string, sessionID: SessionID) {
        let currentSessions = this.#storage[username] ?? []
        let newSessions = currentSessions.filter(
            (obj) => obj.sessionID !== sessionID
        )

        if (newSessions.length !== currentSessions.length) {
            logger.info({ username, sessionID }, "Deleted session")
        }

        this.#storage = {
            ...this.#storage,
            [username]: newSessions
        }
    }

    clearSessions(username?: string, log = true) {
        if (username) {
            log && logger.warn({ username }, "Sessions cleared")
            delete this.#storage[username]
        } else {
            log && logger.warn("All sessions cleared")

            this.#storage = {}
        }
    }
}

export default SessionManager