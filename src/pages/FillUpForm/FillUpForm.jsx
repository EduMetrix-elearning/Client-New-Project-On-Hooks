import React from 'react'
import './FillUpForm.scss'

import image_coin from '../../asset/images/coin.png'

export default function FillUpForm() {
    return (
        <div className='FillUpForm'>
            <div className="content">
                <div className='form'>
                    <div className='heading'>
                        <h5>Please complete the following steps</h5>
                        <h6>Enter OTP passwords which already send to your email and mobile no</h6>
                    </div>
                    <div className='otp_section'>
                        <div className='otp_inputs'>
                            <label htmlFor="">Email OTP</label>
                            <input type="text" />
                            <label htmlFor="">Mobile OTP</label>
                            <input type="text" />
                        </div>
                        <div className='buttons'>
                            <button>Verify OTP</button>
                            <button>Resend OTP</button>
                        </div>
                    </div>
                    <div className='details_form'>
                        <div>
                            <label htmlFor="">Date of Birth</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Gender</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Address</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">State</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">School</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">College / University</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Reference id</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className='submit_button'>
                        <button>Submit</button>
                    </div>
                </div>
                <div className='company'>
                    <img src={image_coin} alt="" />
                    <h3>EduMetrix.io</h3>
                    <hr />
                </div>
            </div>
        </div>
    )
}