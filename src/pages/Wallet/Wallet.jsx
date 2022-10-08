import React, { useState, useEffect } from 'react'
import './Wallet.scss'

import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'

import { fetchLatestPrice, fetchPublicKeyForQRCode, getTotalEarnings, sendKeyTo, sendWithdrawRequest } from '../../api'

export default function Wallet() {

    const [earningsInfo, setEarningsInfo] = useState()
    const [emcData, setEmcData] = useState()
    const [publicKey, setPublicKey] = useState()
    const [sendAddress, setSendAddress] = useState()

    useEffect(() => {
        getTotalEarnings().then((res) => setEarningsInfo(res.data)).catch((err) => console.log(err))
        fetchLatestPrice().then((res) => setEmcData(res.data)).catch((err) => console.log(err))
        fetchPublicKeyForQRCode().then((res) => setPublicKey(res.data.result[0]))
    }, [])

    console.log(earningsInfo)
    console.log(emcData)

    function setupWithdrawal() {
        let obj = {
            sendTo: sendAddress,
            student_id: publicKey.student_id,
        }
        sendKeyTo(obj).then((res) => console.log(res))
    }

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
                        <img src={publicKey?.qrcode} alt="" />
                    </div>
                    <div className="wallet_address">
                        <h6>Wallet Address
                            <i className='fa fa-copy'
                                onClick={() => navigator.clipboard.writeText(`${publicKey?.public_key}`)} />
                        </h6>
                        <p>{publicKey?.public_key}</p>
                    </div>
                    <div className="send_to">
                        <p>Send To A Public Address</p>
                        <input type="text" placeholder='Public / Private key'
                            onChange={(e) => setSendAddress(e.target.value)} />
                        <button onClick={setupWithdrawal}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}