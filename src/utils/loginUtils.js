export const emailValidate = (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}
export const mobileValidate = (number) => {
    const regex = new RegExp(/^(\d{10})$/)
    return regex.test(number)
}

export const signInValidation = (input, captcha, setInputError, setCaptcha) => {
    if (input.email === '' || !emailValidate(input.email) || input.email.indexOf('@') === -1) {
        setInputError((state) => ({ ...state, email: 'Please enter valid email' }))
    } else if (!input.password) {
        setInputError((state) => ({ ...state, password: 'Password field cannot be empty' }))
    } else if (input.password.length < 8 || input.password.includes(" ")) {
        setInputError((state) => ({ ...state, password: 'Password should be minimum 8 characters' }))
    } else if (!captcha.verified) {
        setCaptcha((state) => ({ ...state, error: 'Please verify that you are human' }))
    } else {
        return { validated: true }
    }
}


export const signUpValidation = (input, setInputError) => {
    // console.log(input)
    if (input.username === '' || !input.username) {
        setInputError((state) => ({ ...state, username: 'Please enter valid username' }))
    } else if (input.username?.length < 6) {
        setInputError((state) => ({ ...state, username: 'Username need more than 5 characters' }))
    } else if (input.email === '' || !emailValidate(input.email) || input.email.indexOf('@') === -1) {
        setInputError((state) => ({ ...state, email: 'Please enter valid email' }))
    } else if (!input.password) {
        setInputError((state) => ({ ...state, password: 'Password field cannot be empty' }))
    } else if (input.password.length < 8 || input.password.includes(" ")) {
        setInputError((state) => ({ ...state, password: 'Password should be minimum 8 characters' }))
    } else if (!mobileValidate(input.mobile)) {
        setInputError((state) => ({ ...state, mobile: 'Please enter 10 digit number' }))
    } else if (!input.checkbox) {
        setInputError((state) => ({ ...state, checkbox: 'please check this box if you want to proceed' }))
    } else {
        return { validated: true }
    }
}

export const signUpDetailsFormValidation = (inputs) => {
    
}