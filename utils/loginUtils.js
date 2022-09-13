export const emailValidate = (email) => {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

export const loginValidation = (input, captcha, setInputError, setCaptcha) => {
    if (input.email === '' || !emailValidate(input.email) || input.email.indexOf('@') === -1) {
        setInputError((state) => ({ ...state, email: 'please enter valid email' }))
    } else if (!input.password) {
        setInputError((state) => ({ ...state, password: 'password field cannot be empty' }))
    } else if (input.password.length < 8 || input.password.includes(" ")) {
        setInputError((state) => ({ ...state, password: 'password should be minimum 8 characters' }))
    } else if (!captcha.verified) {
        setCaptcha((state) => ({ ...state, error: 'please verify that you are human' }))
    } else {
        return { validated: true }
    }
}
