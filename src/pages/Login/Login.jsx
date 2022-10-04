import React, { useState } from 'react'
import './Login.scss'

import image_coin from '../../asset/images/Login/coin.png'
import image_logo from '../../asset/images/Login/logo.png'

import image_Etherscan from '../../asset/images/Login/Etherscan-logo-removebg-preview.png'
import image_P2PB2Blogo from '../../asset/images/Login/P2PB2Blogo.png'
import image_COINECKO from '../../asset/images/Login/COINECKO.png'
import image_coincodexjpe from '../../asset/images/Login/coincodexjpe.png'
import image_coinmarketcap from '../../asset/images/Login/coinmarketcap.png'

// import Recaptcha from 'react-recaptcha';

import SignUp from '../../components/_pages/Login/SignUp/SignUp'
import ForgotPassword from '../../components/_pages/Login/ForgotPassword/ForgotPassword'
import SignIn from '../../components/_pages/Login/SignIn/SignIn'
import { useSelector } from 'react-redux'
import PopUpAlert from '../../components/PopUpAlert/PopUpAlert'

// const TEST_SITE_KEY = '6Lc0EJohAAAAAPe3Zxt6FCQRKOIWqPuNuAqFxoqe';

export default function Login() {

  const [page, setPage] = useState('login')

  const PopUp = useSelector((state) => state.PopUp)



  // function recaptchaLoad() {
  //   console.log('getting event in captcha loaded successfully!');
  // }

  // function verifyCallback(response) {
  //   if (response) {
  //     this.setState({
  //       captchaVerified: true,
  //       errorCaptcha: '',
  //     });
  //   }
  // }



  return (
    <>
      <div className='Login'>
        <div className='container'>
          <div className='image_sky_div'>
            <div className='image_coin_div'>
              <img className='image_coin' src={image_coin} alt="" />
            </div>
            <div className='captions'>
              <ul>
                <li>Share your knowledge</li>
                <li>Learn more from your friends</li>
                <li>Chat with friends</li>
                <li>Chat with experts</li>
                <li>Earn money</li>
              </ul>
            </div>
            <div className='captions_footer'>
              <ul>
                <li>Disclaimer</li>
                <li>Privacy policy</li>
                <li>Terms of service</li>
                <li>Contact</li>
                <li>EduMetrix &copy; 2020</li>
              </ul>
            </div>
          </div>
          <div className='login_input_div'>
            <div>
              <p data-content={'About us'}>About Us</p>
            </div>
            <div className='login_company_logo_div justify-center'>
              <div className='login_company_logo_inner_div'>
                <img src={image_logo} alt="" />
                <h6>EduMetrix</h6>
              </div>
            </div>
            {page === 'login' ?
              <SignIn setPage={setPage} />
              : page === 'signIn' ?
                <SignUp setPage={setPage} />
                : page === 'forgetPwd' &&
                <ForgotPassword setPage={setPage} />
            }
          </div>
        </div>
      </div>
      {
        PopUp.show &&
        <PopUpAlert text={PopUp.text} />
      }
    </>
  )
}