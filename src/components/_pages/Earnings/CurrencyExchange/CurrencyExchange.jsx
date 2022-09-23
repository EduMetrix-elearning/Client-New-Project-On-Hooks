import React from 'react'
import './CurrencyExchange.scss'

export default function CurrencyExchange() {
    return (
        <div className='CurrencyExchange'>
            <div className='currency'>
                <div>
                    <h6>Country</h6>
                    <p>India</p>
                </div>
                <div>
                    <h6>Currency</h6>
                    <p>INR</p>
                </div>
            </div>
            <div className='progressbar'><div className='bar' style={{ 'width': '10%' }}></div></div>
            <p><strong>10%</strong></p>
            <div className='footer'>
                <p>Payment threshold: EMC 5</p>
                <button>Withdraw</button>
            </div>
        </div>
    )
}