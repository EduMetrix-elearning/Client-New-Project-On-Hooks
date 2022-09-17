import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './store.js'
import { Provider } from 'react-redux'

import ProtectedRouter from './protectedRouter.js';

import Login from './pages/login'
import Home from './pages/Home/Home.jsx'
import Chat from './pages/chat'

function App() {
  return (
    <div className='platform'>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/login" element={<ProtectedRouter children={<Login />} />} />
            <Route path="/" element={<ProtectedRouter children={<Home />} />} />
            <Route path="/chat" element={<ProtectedRouter children={<Chat />} />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
