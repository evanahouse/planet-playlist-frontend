const rootURL = 'http://localhost:3000'
const loginURL = `${rootURL}/api/v1/login`
const registerURL = `${rootURL}/api/v1/users`
const searchURL = `${rootURL}/api/v1/playlists/search`
const reviewURL = `${rootURL}/api/v1/reviews`
const profileURL = `${rootURL}/api/v1/profile`
const tracksURL = `${rootURL}/api/v1/playlists/`

const token = () => localStorage.getItem('jwt')

const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
}

const authHeaders = {
    ...headers, Authorization: `Bearer ${token()}`
}

export function registerUser(body) {
    return fetch(registerURL, {
        method: 'POST', headers, body
    }).then(res => res.json())
}

export function loginUser(body) {
    return fetch(loginURL, {
        method: 'POST', headers, body
    }).then(res => res.json())
}

export function search(body) {
    return fetch(searchURL, {
        method: 'POST', headers: authHeaders, body
    }).then(res => res.json())
}

export function newReview(body) {
    return fetch(reviewURL, {
        method: 'POST', headers: authHeaders, body
    }).then(res => res.json())
}

export function getProfile() {
    return fetch(profileURL, {
        method: 'GET', headers: authHeaders
    }).then(res => res.json())
}

export function getTracks(id) {
    return fetch(tracksURL + `${id}`, {
        method: 'GET', headers: authHeaders
    }).then(res => res.json())
}


