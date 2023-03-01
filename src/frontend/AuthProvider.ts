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

/**
 * @deprecated VULN
 */
export async function logout__VULN() {
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

export const store =  readable(null, (update) => {
    updateState = update

    if (process.browser) {
        console.log('browser exec');
        let token = sessionStorage.getItem('session')
        console.log(token);
        if (token) getDetails(token)
    }
})
