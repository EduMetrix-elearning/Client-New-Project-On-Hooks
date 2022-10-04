import React, { useState } from 'react'
import { resendOTP } from '../../../../api'
import { OtpSubmitHandle, submitHandle } from '../../../../services/pages/signUp'
import './SignUpDetailsForm.scss'

export default function SignUpDetailsForm({ setPage }) {

    const [OTPs, setOTPs] = useState()
    const [input, setInput] = useState()
    const [isVerified, setIsVerified] = useState(false)

    function OtpInputHandle(e) {
        setOTPs((state) => ({ ...state, [e.target.name]: e.target.value }))
    }

    function inputHandle(e) {
        setInput((state) => ({ ...state, [e.target.name]: e.target.value }))
    }

    async function resendOtpHandle() {
        const res = await resendOTP({ "student_id": localStorage.getItem("userId") })
        console.log(res.data)
    }

    async function onSubmit() {
        const res = await submitHandle(input)
        res.status === 200 && setPage("uploadDocuments")
    }

    async function onOtpSubmit() {
        const res = await OtpSubmitHandle(OTPs)
        res.status === 200 && setIsVerified(true)
    }
    return (
        <div className='SignUpDetailsForm'>
            <div className='heading'>
                <h5>Please complete the following steps</h5>
                <h6>Enter OTP passwords which already send to your email and mobile no</h6>
            </div>
            <div className='otp_section'>
                <div className='otp_inputs'>
                    <label htmlFor="">Email OTP</label>
                    <input type="text" name='email' onChange={OtpInputHandle} />
                    <label htmlFor="">Mobile OTP</label>
                    <input type="text" name='mobile' onChange={OtpInputHandle} />
                </div>
                <div className='buttons'>
                    <button onClick={onOtpSubmit}>Verify OTP</button>
                    <button onClick={resendOtpHandle}>Resend OTP</button>
                </div>
            </div>
            <hr />
            <div className='details_form' >
                <div>
                    <label htmlFor="">Date of Birth</label>
                    <input type="text" onChange={inputHandle} name='dob' disabled={!isVerified} />
                </div>
                <div>
                    <label htmlFor="">Gender</label>
                    <input type="text" onChange={inputHandle} name='gender' disabled={!isVerified} />
                </div>
                <div>
                    <label htmlFor="">Address</label>
                    <input type="text" onChange={inputHandle} name='address' disabled={!isVerified} />
                </div>
                <div>
                    <label htmlFor="">State</label>
                    <input type="text" onChange={inputHandle} name='state' disabled={!isVerified} />
                </div>
                <div>
                    <label htmlFor="">Country</label>
                    <input type="text" onChange={inputHandle} name='country' disabled={!isVerified} />
                </div>
                <div>
                    <label htmlFor="">School</label>
                    <input type="text" onChange={inputHandle} name='school' disabled={!isVerified} />
                </div>
                <div>
                    <label htmlFor="">College / University</label>
                    <input type="text" onChange={inputHandle} name='university' disabled={!isVerified} />
                </div>
            </div>
            <div className='submit_button'>
                <button onClick={onSubmit}>Submit</button>
            </div>
        </div>
    )
}