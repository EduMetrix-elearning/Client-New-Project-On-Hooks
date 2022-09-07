import '../styles/globals.scss'
import { Provider } from 'react-redux'
import {store} from '../store'

import '../components/NavBar/NavBar.scss'
import '../components/Header/Header.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp 