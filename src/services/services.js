import axios from 'axios';

// const baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/user'

export function register(data) {
    return axios({
        method: 'POST',
        url: `http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp`,
        data: data
    }).then(result => {
        window.location.href = '/'
        console.log("success");
        return result;
    }).catch(err => {
        console.error("error after api call", err);
        return err;
    })
}

// export function login(data) {
//     return axios({
//         method: 'POST',
//         url: `http://fundoonotes.incubation.bridgelabz.com/api/user/login`,
//         data: data
//     }).then(result => {
//         window.location.href = '/dashboard'
//         console.log("success");
//         return result;
//     }).catch(err => {
//         console.error("error after api call", err);
//         return err;
//     })
// }

export function login(request) {
let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/login',request)
return response;
}

export function forgot(data) {
    return axios({
        method: 'POST',
        url: `http://fundoonotes.incubation.bridgelabz.com/api/user/reset`,
        data: data
    }).then(result => {
        alert('Reset password link has been sent to registered email');
        return result;
    }).catch(err => {
        console.error("error after api call", err);
        return err;
    })
}

export function reset(data,token) {
    return axios({
        method: 'POST',
        url: `http://fundoonotes.incubation.bridgelabz.com/api/user/reset-password?access_token=${token}`,
        data: data,
    }).then(result => {
        window.location.href = '/'
        console.log("success");
        return result;
    }).catch(err => {
        console.error("error after api call", err);
        return err;
    })
}


