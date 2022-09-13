import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../api'

const initialState = {
    loading: false,
    error: '',
    user: '',
    isAuthenticated: false
};

export const authSlice = createSlice({
    name: "userLogin",
    initialState,
    reducers: {
        loginUser(state, action) {
            state.loading = true
        },
        loginUserSuccess(state, action) {
            state.loading = false
            state.user = action.payload
        },
        loginUserFailure(state, action) {
            state.loading = false
        },
        verifyUser(state, action) {
            const token = localStorage.getItem('token')
            if (token) {
                state.isAuthenticated = true
            }
            else {
                state.isAuthenticated = false
                localStorage.clear('token')
            }
        }
    }
});

export function userLogin(formData) {
    return async (dispatch) => {
        dispatch(loginUser())
        try {
            const response = await api.login(formData)
            if (response.data) {
                response.data.photo = response.data.photo.trim("")
                // console.log(response.data)
                // localStorage.setItem("userInfo", response.data)
                localStorage.setItem('token', response.data.token)
            }
            dispatch(loginUserSuccess(response.data))
            // console.log(localStorage.getItem('userInfo'))
        } catch (err) {
            dispatch(loginUserFailure(err))
        }
    }
}

export const { loginUser, loginUserSuccess, loginUserFailure, verifyUser } = authSlice.actions;

export default authSlice.reducer;