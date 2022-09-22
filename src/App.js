import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './store.js'
import { Provider } from 'react-redux'

import ProtectedRouter from './protectedRouter.js';

import Login from './pages/login'
import Home from './pages/Home/Home.jsx'
import Chat from './pages/chat/chat'
import TopPics from './pages/pics/TopPics.jsx';
import FindFriends from './pages/find_friends/find_friends.jsx';
import Earnings from './pages/earnings/index.jsx';
import ChatBot from './pages/chatbot/index.jsx';
import Profile from './pages/profile/index.jsx';
import Wallet from './pages/wallet/index.jsx';

function App() {
  return (
    <div className='platform'>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/login" element={<ProtectedRouter children={<Login />} />} />
            <Route path="/" element={<ProtectedRouter children={<Home />} />} />
            <Route path="/chat" element={<ProtectedRouter children={<Chat />} />} />
            <Route path="/pics" element={<ProtectedRouter children={<TopPics />} />} />
            <Route path="/find_friends" element={<ProtectedRouter children={<FindFriends />} />} />
            <Route path="/earnings" element={<ProtectedRouter children={<Earnings />} />} />
            <Route path="/chatbot" element={<ProtectedRouter children={<ChatBot />} />} />
            <Route path="/profile" element={<ProtectedRouter children={<Profile />} />} />
            <Route path="/wallet" element={<ProtectedRouter children={<Wallet />} />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
