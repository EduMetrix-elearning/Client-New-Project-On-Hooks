import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './store.js'
import { Provider } from 'react-redux'

import Login from './pages/login'
import Home from './pages/Home/Home.jsx'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
