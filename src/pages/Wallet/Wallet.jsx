import React, { useState, useEffect } from 'react'
import './Wallet.scss'

import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'
import Modal from '../../components/Modal/Modal'

import { fetchAllTransactions, fetchLatestPrice, fetchPublicKeyForQRCode, getTotalEarnings, sendKeyTo, sendWithdrawRequest, walletOTPConfirm, walletOTPVerify } from '../../api'

export default function Wallet() {

    const [earningsInfo, setEarningsInfo] = useState()
    const [emcData, setEmcData] = useState()
    const [publicKey, setPublicKey] = useState()
    const [sendAddress, setSendAddress] = useState()
    const [transactions, setTransactions] = useState()
    const [modalShow, setModalShow] = useState(false)
    const [otpInputs, setOtpInputs] = useState()

    useEffect(() => {
        // getTotalEarnings().then((res) => setEarningsInfo(res.data)).catch((err) => console.log(err))
        // fetchLatestPrice().then((res) => setEmcData(res.data)).catch((err) => console.log(err))
        fetchPublicKeyForQRCode().then((res) => setPublicKey(res.data.result[0]))
    }, [])

    useEffect(() => {
        getAllTransactions()
    }, [publicKey])

    function setupWithdrawal() {
        let obj = {
            sendTo: sendAddress,
            student_id: publicKey.student_id,
        }
        sendKeyTo(obj).then((res) => {
            console.log(res.data)
            setModalShow(true)
        }).catch((err) => console.log(err))

    }

    function getAllTransactions() {
        let obj = {
            publicKey: publicKey?.public_key,
            apiKey: "Z11QY2PGV1YNNA8CDX4H2D8K166E2TB3PT"
        }
        if (obj.publicKey !== undefined) fetchAllTransactions(obj)
            .then((res) => {
                res.data.result.forEach((tx) => {
                    let date = new Date(+tx.timeStamp * 1000);
                    tx.timeStamp = date.toDateString();
                    tx.value = (tx.value / 1000000000000000000).toFixed(2); // From Wei
                });
                setTransactions(res.data);
            })
            .catch((err) => console.log(err))
    }

    function verifyOTP(type) {
        let obj = {
            student_id: publicKey.student_id,
            otp_type: type,
            otp: 'email' === type ? otpInputs.email : otpInputs.sms,
        }
        walletOTPVerify(obj).then((res) => {
            console.log(res.data)
            setModalShow(false)
            walletOTPConfirm({ student_id: publicKey.student_id })
                .then((resp) => {
                    console.log(resp.data)

                })
                .catch((err) => console.log(err))
        }).catch((err) => console.log(err))
    }

    // console.log(earningsInfo)
    // console.log(emcData)
    // console.log(publicKey)
    // console.log(transactions)

    return (
        <div className='Wallet grid'>
            <Header />
            <NavBar currPage={'Wallet'} />
            <div className='wallet_content'>
                <p data-content="heading">EMC Balance: $</p>
                <p data-content="heading">USD Balance:</p>
                <div className="transactions">
                    <h3>Transactions</h3>
                    {transactions?.status === '0' && <p>{transactions.message}</p>}
                    {transactions?.result.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <strong>{item.timeStamp}</strong>
                            </td>
                            <td>{item.to || 'N/A'}</td>
                            <td>{publicKey.public_key === item.to ? 'Received' : 'Sent'}</td>
                            <td>{item.value}</td>
                        </tr>
                    ))}
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
            <Modal setShow={setModalShow} show={modalShow}>
                <h3>Please verify the OTPs to initiate the transaction</h3>
                <div>
                    <input type="text" placeholder='Enter SMS OTP'
                        onChange={(e) => setOtpInputs((s) => ({ ...s, sms: e.target.value }))} />
                    <button className='sms' onClick={() => verifyOTP('sms')}>Verify OTP</button>
                </div>
                <div>
                    <input type="text" placeholder='Enter Email OTP'
                        onChange={(e) => setOtpInputs((s) => ({ ...s, email: e.target.value }))} />
                    <button className='email' onClick={() => verifyOTP('email')}>Verify OTP</button>
                </div>
            </Modal>
        </div>
    )
}