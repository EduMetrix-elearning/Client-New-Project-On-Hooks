import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './store.js'
import { Provider } from 'react-redux'

import Login from './pages/login'
import Home from './pages/Home/Home.jsx'

import Chat from './pages/chat'
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className='platform'>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
