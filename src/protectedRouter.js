import { useDispatch } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"
import { loginUserSuccess } from "./slices/authSlice"

export default function ProtectedRouter({ children }) {

    const dispatch = useDispatch()
    const { pathname } = useLocation()

    const user = JSON.parse(localStorage.getItem('userInfo'))

    if (pathname === '/login') {
        if (user) {
            dispatch(loginUserSuccess(user))
            return <Navigate to="/" replace />
        } else { return children }
    } else {
        if (user) {
            dispatch(loginUserSuccess(user))
            return children
        }
        else { return <Navigate to="/login" replace /> }
    }
}