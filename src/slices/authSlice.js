import { createSlice } from "@reduxjs/toolkit";
import * as api from '../api'

const initialState = {
    signUp: {
        loading: false,
        error: ''
    },
    login: {
        loading: false,
        error: ''
    },
    logout: {
        loading: false,
        error: ''
    },
    user: null,
    isAuthenticated: false
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

        signUpUser(state, action) {
            switch (action.payload.type) {
                case "start":
                    state.signUp.loading = true
                    state.signUp.error = ''
                    break;
                case "success":
                    state.signUp.loading = false
                    break;
                case "failure":
                    state.signUp.loading = false
                    state.signUp.error = action.payload.payload
                    state.isAuthenticated = false
                    break;
                default:
            }
        },

        loginUser(state, action) {
            switch (action.payload.type) {
                case "start":
                    state.login.loading = true
                    state.login.error = ''
                    break;
                case "success":
                    state.login.loading = false
                    state.isAuthenticated = true
                    state.user = action.payload.payload
                    break;
                case "failure":
                    state.login.loading = false
                    state.isAuthenticated = false
                    state.login.error = action.payload.payload
                    break;
                default:
            }

        },
        logoutUser(state, action) {
            switch (action.type) {
                case "start":
                    state.logout.loading = true
                    break;
                case "success":
                    state.user = null
                    state.isAuthenticated = false
                    state.logout.loading = false
                    break;
                case "failure":
                    state.logout.loading = false
                    break;
                default:
            }
        }
    }
})

export function userSignUp(formData, navigate) {
    console.log(formData)
    return async (dispatch) => {
        dispatch(signUpUser({ type: "start" }))
        try {
            const response = await api.getStarted(formData)
            console.log(response.data)
            if (response.data.status === "success") {
                dispatch(signUpUser({ type: "success" }))
                localStorage.setItem("userId", response.data.student_id)
                navigate('/sign_up_user_authentication')
            }
        } catch (err) {
            console.log(err)
            dispatch(signUpUser({ type: "failure", payload: err.response.data.message }))
        }
    }
}

export function userLogin(formData, navigate) {
    return async (dispatch) => {
        dispatch(loginUser({ type: "start" }))
        try {
            const response = await api.login(formData)
            if (response.data) {
                response.data.photo = response.data.photo.trim("")
                localStorage.setItem('userInfo', JSON.stringify(response.data))
            }
            dispatch(loginUser({ type: "success", payload: response.data }))
            navigate('/')
        } catch (err) {
            dispatch(loginUser({ type: "failure", payload: err.response.data.message }))
        }
    }
}

export function userLogout() {
    return async (dispatch) => {
        dispatch(logoutUser({ type: "start" }))
        try {
            localStorage.clear()
            dispatch(logoutUser({ type: "success" }))
        } catch (err) {
            dispatch(logoutUser({ type: "failure" }))
        }
    }
}

export const { loginUser, logoutUser, signUpUser } = authSlice.actions;
export default authSlice.reducer;