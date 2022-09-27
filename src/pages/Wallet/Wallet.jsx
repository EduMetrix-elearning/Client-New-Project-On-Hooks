import React from 'react'
import './Wallet.scss'

import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'

import image_qrcode from '../../asset/images/Wallet/qrcode.png'

export default function Wallet() {
    return (
        <div className='Wallet grid'>
            <Header />
            <NavBar currPage={'Wallet'} />
            <div className='wallet_content'>
                <p data-content="heading">EMC Balance: $</p>
                <p data-content="heading">USD Balance:</p>
                <div className="transactions">
                    <h3>Transactions</h3>
                    <p>No transactions available</p>
                </div>
                <div className='qrcode'>
                    <div className="qr">
                        <img src={image_qrcode} alt="" />
                    </div>
                    <div className="wallet_address">
                        <h6>Wallet Address</h6>
                        <p>0x4c20c06ff5BFDfasdfasdfasdfasfasdf</p>
                    </div>
                    <div className="send_to">
                        <p>Send To A Public Address</p>
                        <input type="text" placeholder='Public / Private key' />
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}