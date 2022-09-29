import React, { useState } from 'react'
import { forgotPassword } from '../../../../api'
import './ForgotPassword.scss'

export default function ForgotPassword({ setPage }) {

    const [input, setInput] = useState()
    const [error, setError] = useState()

    console.log(input)
    async function submitHandle(e) {
        e.preventDefault()
        try {
            const data = await forgotPassword({ mobile: input }).then((response) => response.data)
            console.log(data.response)
        } catch (err) {
            console.log(err.response.data.message)
            setError(err.response.data.message)
        }
    }

    return (
        <div className='ForgotPassword'>
            < div className='forgot_password_inputs'>
                <div className="forgot_password_inputs_inner_div">
                    <div className='heading'>
                        <p data-content={'heading'}>Account recovery</p>
                    </div>
                    <div className="inputs">
                        <input type="text" onChange={(e) => setInput(e.target.value)}
                            placeholder='Enter your mobile number here' />
                    </div>
                    {
                        error &&
                        <p className='error'>{error}</p>
                    }
                    <div className='forgot_password_buttons'>
                        <button onClick={submitHandle}>Send OTP</button>
                        <button onClick={() => setPage('login')}>Back to login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}