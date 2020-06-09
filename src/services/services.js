import axios from 'axios';

const baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/user'

export function register(request) {
    let response = axios.post(baseUrl+'/userSignUp', request)
    return response;
}

export function login(request) {
    let response = axios.post(baseUrl+'/login', request)
    return response;
}

export function forgot(request) {
    let response = axios.post(baseUrl+'/reset', request)
    return response;
}

export function reset(request, token) {
    let response = axios.post(baseUrl+`/reset-password?access_token=${token}`, request)
    return response;
}
