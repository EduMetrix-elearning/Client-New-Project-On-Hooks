import React from 'react'
import { sendWithdrawRequest } from '../../../../api'
import './CurrencyExchange.scss'

export default function CurrencyExchange({ userDetails }) {

    function withdrawHandle() {
        sendWithdrawRequest({}).then((res) => console.log(res.data))
    }

    return (
        <div className='CurrencyExchange'>
            <div className='currency'>
                <div>
                    <h6>Country</h6>
                    <p>{userDetails?.student_country}</p>
                </div>
                <div>
                    <h6>Currency</h6>
                    <p>INR</p>
                </div>
            </div>
            <div className='progressbar'><div className='bar' style={{ 'width': `${userDetails?.referal_earnings || "0%"}` }}></div></div>
            <p><strong>{userDetails?.referal_earnings || '0%'}</strong></p>
            <div className='footer'>
                <p>Payment threshold: EMC 5</p>
                <button onClick={() => withdrawHandle()}>Withdraw</button>
            </div>
        </div>
    )
}