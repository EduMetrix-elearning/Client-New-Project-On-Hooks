import { useSelector, useDispatch } from 'react-redux'
import NavBar from '../components/NavBar/NavBar'
import Header from '../components/Header/Header'

export default function Home() {
  // const isAuth = useSelector((state) => state.authentication.authState)
  // const dispatch = useDispatch()
  return (
    <div>
      <NavBar currPage={'Home'} />
      {/* <Header /> */}
    </div>
  )
}