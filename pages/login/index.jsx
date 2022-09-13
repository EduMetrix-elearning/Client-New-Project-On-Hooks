import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'

import image_coin from '../../Assets/images/Login/coin.png'
import image_logo from '../../Assets/images/Login/logo.png'

import image_Etherscan from '../../Assets/images/Login/Etherscan-logo-removebg-preview.png'
import image_P2PB2Blogo from '../../Assets/images/Login/P2PB2Blogo.png'
import image_COINECKO from '../../Assets/images/Login/COINECKO.png'
import image_coincodexjpe from '../../Assets/images/Login/coincodexjpe.png'
import image_coinmarketcap from '../../Assets/images/Login/coinmarketcap.png'

import Recaptcha from 'react-recaptcha';
import Auth from '../../Auth'
import { loginValidation } from '../../utils/loginUtils'
import { userLogin, verifyUser } from '../../slices/authSlice'
import Router from 'next/router'

// const TEST_SITE_KEY = '6Lc0EJohAAAAAPe3Zxt6FCQRKOIWqPuNuAqFxoqe';

export default function Login() {

  const isAuth = useSelector((state) => state.authentication.isAuthenticated)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(verifyUser())
    if (isAuth) {
      Router.push('/')
    }
  }, [isAuth])

  const [inputError, setInputError] = useState({})
  const [input, setInput] = useState({})
  const [captcha, setCaptcha] = useState({ verified: true })

  function inputHandle(event) {
    if (event.target.name === 'email') {
      setInput((state) => ({ ...state, email: event.target.value }))
      setInputError((state) => ({ ...state, email: '' }))
    } else if (event.target.name === 'password') {
      setInput((state) => ({ ...state, password: event.target.value }))
      setInputError((state) => ({ ...state, password: '' }))
    }
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
        dispatch(userLogin(obj))
      }
    }
  }

  function recaptchaLoad() {
    console.log('getting event in captcha loaded successfully!');
  }

  function verifyCallback(response) {
    if (response) {
      this.setState({
        captchaVerified: true,
        errorCaptcha: '',
      });
    }
  }



  return (
    <>
      {!isAuth &&
        <div className='Login'>

          <div className='container'>
            <div className='image_sky_div'>
              <div className='image_coin_div'>
                <img className='image_coin' src={image_coin.src} alt="" />
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
                  <img src={image_logo.src} alt="" />
                  <h6>EduMetrix</h6>
                </div>
              </div>
              <div className='login_inputs justify-center'>
                <div className='login_inputs_inner_div'>
                  <div className='login_heading_and_inputs'>
                    <div className='heading_student_div'>
                      <p data-content={'heading_student'}>Student</p>
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
                    <span data-content="forgot-password">Forgot password?</span>
                  </div>
                  <div className="Login_robot_verification">
                    <Recaptcha
                      // style={{ display: 'inline-block', width: 'auto' }}
                      sitekey={process.env.TEST_SITE_KEY}
                      theme="light"
                      render="explicit"
                      onloadCallback={recaptchaLoad}
                      verifyCallback={verifyCallback}
                      fullWidth
                    />
                  </div>
                  <div className='login_buttons'>
                    <button onClick={submitHandle}>Sign In</button>
                    <button>Not yet an account? Sign up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}