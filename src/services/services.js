import axios from 'axios';

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

export function login(data) {
    return axios({
        method: 'POST',
        url: `http://fundoonotes.incubation.bridgelabz.com/api/user/login`,
        data: data
    }).then(result => {
        window.location.href = '/dashboard'
        console.log("success");
        return result;
    }).catch(err => {
        console.error("error after api call", err);
        return err;
    })
}




