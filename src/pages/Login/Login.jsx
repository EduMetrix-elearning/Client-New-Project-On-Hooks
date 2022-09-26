import React, { useState } from 'react'
import './Login.scss'

import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import image_coin from '../../asset/images/Login/coin.png'
import image_logo from '../../asset/images/Login/logo.png'

import image_Etherscan from '../../asset/images/Login/Etherscan-logo-removebg-preview.png'
import image_P2PB2Blogo from '../../asset/images/Login/P2PB2Blogo.png'
import image_COINECKO from '../../asset/images/Login/COINECKO.png'
import image_coincodexjpe from '../../asset/images/Login/coincodexjpe.png'
import image_coinmarketcap from '../../asset/images/Login/coinmarketcap.png'

// import Recaptcha from 'react-recaptcha';
import { loginValidation } from '../../utils/loginUtils'
import { userLogin, verifyUser } from '../../slices/authSlice'
import { useEffect } from 'react'

// const TEST_SITE_KEY = '6Lc0EJohAAAAAPe3Zxt6FCQRKOIWqPuNuAqFxoqe';

export default function Login() {

  const user = useSelector((state) => state.Authentication)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [inputError, setInputError] = useState({})
  const [input, setInput] = useState({})
  const [captcha, setCaptcha] = useState({ verified: true })
  const [page, setPage] = useState('login')

  function inputHandle(event) {
    const { name, value } = event.target;
    setInput(state => ({ ...state, [name]: value }));
    setInputError((state) => ({ ...state, [name]: '' }));
  }

  function submitHandle(e) {
    if (e.code === "Enter" || e.type === 'click') {
      e.preventDefault();
      const response = loginValidation(input, captcha, setInputError, setCaptcha)
      if (response?.validated) {
        let obj = {
          email: input.email,
          password: input.password,
        };
        dispatch(userLogin(obj, navigate))
      }
    }
  }

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
              <div className='login_inputs justify-center'>
                <div className='login_inputs_inner_div'>
                  <div className='login_heading_and_inputs'>
                    <div className='heading_student_div'>
                      <p data-content={'heading_student'}>Login</p>
                    </div>
                    <div className='inputs'>
                      <input type="text" placeholder='Username' name='email'
                        onChange={(event) => { inputHandle(event) }}
                        onKeyDown={submitHandle} autoFocus />
                      {inputError.email &&
                        <span>{inputError.email}</span>
                      }
                      <input type="password" placeholder='Password' name='password'
                        onChange={(event) => { inputHandle(event) }}
                        onKeyDown={submitHandle} />
                      {inputError.password &&
                        <span>{inputError.password}</span>
                      }
                    </div>
                  </div>
                  <div className='login_remember_forgot_password'>
                    <div className='checkbox_and_label'>
                      <input type="checkbox" />
                      <label htmlFor="">Remember me</label>
                    </div>
                    <span data-content="forgot-password" onClick={() => setPage('forgetPwd')}>Forgot password?</span>
                  </div>
                  <div className="Login_robot_verification">
                    {/* <Recaptcha
                      // style={{ display: 'inline-block', width: 'auto' }}
                      sitekey={process.env.TEST_SITE_KEY}
                      theme="light"
                      render="explicit"
                      onloadCallback={recaptchaLoad}
                      verifyCallback={verifyCallback}
                      fullWidth
                    /> */}
                  </div>
                  <div className='login_buttons'>
                    <button onClick={submitHandle}>
                      {user.loading ? "Loading..." : 'Submit'}
                    </button>
                    <button onClick={() => setPage('signIn')}>Not yet have an account? Sign In</button>
                  </div>
                </div>
              </div>
              : page === 'signIn' ?
                <div className='signIn_inputs justify-center'>
                  <div className="signIn_inputs_inner_div">
                    <div className='heading'>
                      <p data-content={'heading'}>Sign In</p>
                    </div>
                    <div className='inputs'>
                      <input type="text" placeholder='Username' autoFocus />
                      <input type="text" placeholder='Email' />
                      <input type="text" placeholder='Password' />
                      <input type="text" placeholder='Mobile no' />
                    </div>
                    <div className='checkbox_and_label'>
                      <input type="checkbox" />
                      <label htmlFor="">I read and agree to Terms & Conditions</label>
                    </div>
                    <div className="signIn_buttons">
                      <button>Get started</button>
                      <button onClick={() => setPage('login')}>Already have an account? Login</button>
                    </div>
                  </div>
                </div>
                : page === 'forgetPwd' &&
                < div className='forgot_password_inputs'>
                  <div className="forgot_password_inputs_inner_div">
                    <div className='heading'>
                      <p data-content={'heading'}>Account recovery</p>
                    </div>
                    <div className="inputs">
                      <input type="text" placeholder='Enter your mobile number here' />
                    </div>
                    <div className='forgot_password_buttons'>
                      <button>Send OTP</button>
                      <button onClick={() => setPage('login')}>Back to login</button>
                    </div>
                  </div>
                </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}