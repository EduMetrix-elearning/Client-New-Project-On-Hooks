import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userSignUp } from '../../../../slices/authSlice';
import { signUpValidation } from '../../../../utils/loginUtils';
import './SignUp.scss'

export default function SignUp({ setPage }) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [inputError, setInputError] = useState({})
    const [input, setInput] = useState({})

    function inputHandle(event) {
        const { name, value } = event.target;
        setInput(state => ({ ...state, [name]: value }));
        setInputError((state) => ({ ...state, [name]: '' }));
    }

    function submitHandle(e) {
        if (e.code === "Enter" || e.type === 'click') {
            e.preventDefault();
            const response = signUpValidation(input, setInputError)
            if (response?.validated) {
                let obj = {
                    user_name: input.username,
                    email: input.email,
                    password: input.password,
                    contact_number: "+91" + input.mobile,
                    country: 'India',
                    name: input.username,
                    surname: input.username,
                    terms: true
                };
                dispatch(userSignUp(obj, navigate))
            }
        }
    }

    function hideError() {
        setTimeout(() => {
            setInputError((state) => ({ ...state, checkbox: '' }))
        }, 2000)
    }

    return (
        <div className='SignUp'>
            <div className='signIn_inputs justify-center'>
                <div className="signIn_inputs_inner_div">
                    <div className='heading'>
                        <p data-content={'heading'}>Sign In</p>
                    </div>
                    <div className='inputs'>
                        <input type="text" placeholder='Username' name='username'
                            className={inputError.username ? "error" : ""}
                            onChange={(event) => inputHandle(event)}
                            autoFocus />
                        {inputError.username &&
                            <p>{inputError.username}</p>
                        }
                        <input type="text" placeholder='Email' name='email'
                            className={inputError.email ? "error" : ""}
                            onChange={(event) => inputHandle(event)}
                        />
                        {inputError.email &&
                            <p>{inputError.email}</p>
                        }
                        <input type="password" placeholder='Password' name='password'
                            className={inputError.password ? "error" : ""}
                            onChange={(event) => inputHandle(event)}
                        />
                        {inputError.password &&
                            <p>{inputError.password}</p>
                        }
                        <input type="text" placeholder='Mobile no' name='mobile'
                            className={inputError.mobile ? "error" : ""}
                            onChange={(event) => inputHandle(event)}
                        />
                        {inputError.mobile &&
                            <p>{inputError.mobile}</p>
                        }
                    </div>
                    <div className='checkbox_and_label'>
                        <input type="checkbox" name='checkbox'
                            className={inputError.checkbox ? "error" : ""}
                            onChange={(e) => inputHandle({ target: { name: "checkbox", value: e.target.checked } })} />
                        <label htmlFor="">I read and agree to Terms & Conditions</label>
                        {inputError.checkbox && <p onClick={hideError()}>{inputError.checkbox}</p>}
                    </div>
                    <div className="signIn_buttons">
                        <button onClick={submitHandle}>Get started</button>
                        <button onClick={() => setPage('login')}>Already have an account? Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}