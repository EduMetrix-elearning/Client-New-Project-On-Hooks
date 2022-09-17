import { createSlice } from "@reduxjs/toolkit";
import * as api from '../api'

const initialState = {
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
        loginUser(state, action) {
            state.login.loading = true
        },
        loginUserSuccess(state, action) {
            state.login.loading = false
            state.isAuthenticated = true
            state.user = action.payload
        },
        loginUserFailure(state, action) {
            state.login.loading = false
            state.isAuthenticated = false
            state.login.error = action.payload
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

export function userLogin(formData, navigate) {
    return async (dispatch) => {
        dispatch(loginUser())
        try {
            const response = await api.login(formData)
            if (response.data) {
                response.data.photo = response.data.photo.trim("")
                localStorage.setItem('userInfo', JSON.stringify(response.data))
            }
            dispatch(loginUserSuccess(response.data))
            navigate('/')
        } catch (err) {
            dispatch(loginUserFailure(err))
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

export const { loginUser, loginUserSuccess, loginUserFailure, verifyUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;