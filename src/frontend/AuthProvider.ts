import { readable } from 'svelte/store'
import type { Arbitrary, Password } from '../types/binds'

const BASE_URL = "/api/v1"

export async function login(username: string, password: Password) {
    let response = await fetch(BASE_URL + "/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    }).then(r => r.json())

    if (response['status']) {
        sessionStorage.setItem('session', response['token'])
        return getDetails(response['token'])
    }

    throw new Error("Incorrect username or password")
}

export async function logout() {
    // Request the server to remove the session
    let response = await fetch(BASE_URL + "/me", {
        method: 'DELETE',
        headers: {
            "Authorization": `Bearer ${sessionStorage.getItem('session')}`
        }
    })
        .then(r => r.json())
    if (response['status']) {
        clearLocalState()
    } else {
        console.error("Errrr...", response)
        alert("An error occured... check the console")
    }

}


/**
 * @deprecated VULN - Server side invalidation not used
 */
export async function logout__VULN() {
    clearLocalState()
}

function clearLocalState() {
    updateState?.(lastState = null)
    sessionStorage.removeItem('session')
    location.reload()
}

export async function getDetails(token: Arbitrary) {
    let response = await fetch(BASE_URL + "/me", {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
        .then(r => r.json())
    if (response['status']) {
        updateState?.(lastState = response['username'])
    } else {
        updateState?.(lastState = null)
    }
}

let lastState: any = null
let updateState: Function

export const store = readable(null, (update) => {
    updateState = update

    if (process.browser) {
        let token = sessionStorage.getItem('session')
        if (token) getDetails(token)
    }
})
