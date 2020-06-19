import axios from 'axios';
const baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api'

class Service {
    
    register(data) {
        return new Promise((resolve, reject) => {
            axios.post(baseUrl + '/user/userSignUp', data)
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
            axios.post(baseUrl + '/user/login', data)
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
            axios.post(baseUrl + '/user/reset', data)
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
            axios.post(baseUrl + `/user/reset-password?access_token=${token}`, data)
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }

    logout() {
        return new Promise((resolve, reject) => {
            axios.post(baseUrl + `/user/logout?access_token=${sessionStorage.getItem('token')}`)
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }

    addNote(note) {
        return new Promise((resolve, reject) => {
            axios.post(baseUrl + `/notes/addNotes?access_token=${sessionStorage.getItem('token')}`,note)
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }

    getNotes() {
        return new Promise((resolve, reject) => {
            axios.get(baseUrl + `/notes/getNotesList?access_token=${sessionStorage.getItem('token')}`)
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }

    archiveNotes(data) {
        return new Promise((resolve, reject) => {
            axios.post(baseUrl + `/notes/archiveNotes?access_token=${sessionStorage.getItem('token')}`,data)
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }

    getArchivedNotes() {
        return new Promise((resolve, reject) => {
            axios.get(baseUrl + `/notes/getArchiveNotesList?access_token=${sessionStorage.getItem('token')}`)
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
