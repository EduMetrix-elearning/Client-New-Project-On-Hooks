class Auth {
    constructor() {
        const authenticated = false
    }
    login(callback) {
        this.authenticated = true
        callback()
    }
    logout(callback) {
        if (localStorage.getItem("token") !== "") {
            this.authenticated = false
            window.localStorage.clear();
            callback()
        }
    }

    isAuthenticated() {
        if (localStorage.getItem("token") !== null) {
            this.authenticated = true
            return this.authenticated
        } else {
            this.authenticated = false
            return this.authenticated
        }

    }
}

export default new Auth()