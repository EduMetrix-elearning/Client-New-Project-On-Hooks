import '../styles/globals.scss'
import { Provider } from 'react-redux'
import { store } from '../store'

//components styles
import '../components/NavBar/NavBar.scss'
import '../components/Header/Header.scss'

//pages styles
import '../pages/login/index.scss'  //login


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp 