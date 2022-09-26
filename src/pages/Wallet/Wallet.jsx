import React from 'react'
import './Wallet.scss'

import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'

export default function Wallet() {
    return (
        <div className='Wallet grid'>
            <Header />
            <NavBar currPage={'Wallet'} />
            <div className='wallet_content'>
                <p>EMC Balance: $</p>
                <p>USD Balance:</p>
                <div className="transactions">
                    <faisal>Transactions</faisal>
                </div>
                <div className='qrcode'>
                    <div className="qr"></div>
                    <div className="wallet_address"></div>
                    <div className="send_to"></div>
                </div>
            </div>
        </div>
    )
}