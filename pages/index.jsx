import { useSelector, useDispatch } from 'react-redux'
import NavBar from '../components/NavBar/NavBar'
import Header from '../components/Header/Header'
import { useEffect } from 'react'
import { verifyUser } from '../slices/authSlice'
import Router from 'next/router'
// import { loginAction, setAuthState } from '../slices/authSlice'

export default function Home() {
  const isAuth = useSelector((state) => state.authentication.isAuthenticated)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(verifyUser())
    if (!isAuth) {
      Router.push('/login')
    }
  }, [isAuth])

  return (
    <div>
      {
        isAuth &&
        <NavBar currPage={'Home'} />
      }
    </div>
  )
}