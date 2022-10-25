import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './store.js'
import { Provider } from 'react-redux'

import ProtectedRouter from './ProtectedRouter.js';
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Chat from './pages/Chat/Chat'
import TopPics from './pages/TopPics/TopPics';
import FindFriends from './pages/FindFriends/FindFriends';
import Earnings from './pages/Earnings/Earnings';
import Chatbot from './pages/Chatbot/Chatbot';
import Profile from './pages/Profile/Profile';
import Wallet from './pages/Wallet/Wallet';
import SignUpVerification from './pages/SignUpVerification/SignUpVerification.jsx';

import AboutUs from './pages/AboutUs/AboutUs/AboutUs';

import Doc from './pages/Doc/Doc';
import Disclaimer from './pages/AboutUs/Disclaimer/Disclaimer.jsx';
import AboutUsIndex from './pages/AboutUs';
import PrivacyPolicy from './pages/AboutUs/PrivacyPolicy/PrivacyPolicy.jsx';
import TermsOfServices from './pages/AboutUs/TermsOfServices/TermsOfServices.jsx';
import WhitePaper from './pages/AboutUs/WhitePaper/WhitePaper.jsx';
import ContactUs from './pages/AboutUs/ContactUs/ContactUs'

function App() {
  return (
    <div className='platform'>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route index element={<ProtectedRouter children={<Home />} />} />
            <Route path="login" element={<ProtectedRouter children={<Login />} />} />
            <Route path="chat" element={<ProtectedRouter children={<Chat />} />} />
            <Route path="pics" element={<ProtectedRouter children={<TopPics />} />} />
            <Route path="find_friends" element={<ProtectedRouter children={<FindFriends />} />} />
            <Route path="earnings" element={<ProtectedRouter children={<Earnings />} />} />
            <Route path="chatbot" element={<ProtectedRouter children={<Chatbot />} />} />
            <Route path="profile" element={<ProtectedRouter children={<Profile />} />} />
            <Route path="wallet" element={<ProtectedRouter children={<Wallet />} />} />
            <Route path="sign_up_user_authentication" element={<SignUpVerification />} />
            <Route path="About_us" element={<AboutUsIndex />}>
              <Route index element={<AboutUs />} />
              <Route path="disclaimer" element={<Disclaimer />} />
              <Route path="privacy_policy" element={<PrivacyPolicy />} />
              <Route path="terms_of_services" element={<TermsOfServices />} />
              <Route path="white_paper" element={<WhitePaper />} />
              <Route path="contact_us" element={<ContactUs />} />
            </Route>
            {/* <Route path='*' element={<ErrorPage />} /> */}

            <Route path="/documentation" element={<Doc />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;