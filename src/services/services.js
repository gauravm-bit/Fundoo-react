import axios from 'axios';

// const baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/user'

export function register(request) {
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp', request)
    return response;
}

export function login(request) {
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/login', request)
    return response;
}

export function forgot(request) {
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/reset', request)
    return response;
}

export function reset(request, token) {
    let response = axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/user/reset-password?access_token=${token}`, request)
    return response;
}
