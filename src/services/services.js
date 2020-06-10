import axios from 'axios';
const baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/user'


class Service {
    
    register(data) {
        return new Promise((resolve, reject) => {
            axios.post(baseUrl + '/userSignUp', data)
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }

    login(data) {
        return new Promise((resolve, reject) => {
            axios.post(baseUrl + '/login', data)
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }

    forgot(data) {
        return new Promise((resolve, reject) => {
            axios.post(baseUrl + '/reset', data)
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }

    reset(data, token) {
        return new Promise((resolve, reject) => {
            axios.post(baseUrl + `/reset-password?access_token=${token}`, data)
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }

    logout(token) {
        return new Promise((resolve, reject) => {
            axios.post(baseUrl + `/logout?access_token=${token}`)
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
}



export default Service;
