import React from "react"
import { useDispatch } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"
import { loginUser } from "./slices/authSlice"

export default function ProtectedRouter({ children }) {

    const dispatch = useDispatch()
    const { pathname } = useLocation()

    const user = JSON.parse(localStorage.getItem('userInfo'))
    // const userId = localStorage.getItem('userId')

    if (pathname === ('/login' || '/sign_up_form_details')) {
        if (user) {
            dispatch(loginUser({ type: "success", payload: user }))
            return <Navigate to="/" />
        } else { return children }
    } else {
        if (user) {
            dispatch(loginUser({ type: "success", payload: user }))
            return children
        }
        else {
            return <Navigate to="/homepage" />
        }
    }
}