import React, { useEffect, useState } from 'react'
import './Earnings.scss'

import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'
import CurrencyExchange from '../../components/_pages/Earnings/CurrencyExchange/CurrencyExchange'
import SocialMarketContent from '../../components/_pages/Earnings/SocialMarketContent/SocialMarketContent'
import ReferYourFriend from '../../components/_pages/Earnings/ReferYourFriend/ReferYourFriend'
import Table from '../../components/_pages/Earnings/Table/Table'
import { getAllEarningLikes, getBounsData, getCurrency, getDetails, getReferralData, getShareData } from '../../api'

export default function Earnings() {

    const [userDetails, setUserDetails] = useState()
    const [likeData, setLikeData] = useState()
    const [referalData, setReferalData] = useState()
    const [shareData, setShareData] = useState()
    const [bounsData, setBounsData] = useState()


    useEffect(() => {
        getDetails().then((res) => setUserDetails(res.data.result[0]))
        getAllEarningLikes().then((res) => setLikeData(res.data)).catch((err) => console.error(err))
        getReferralData().then((res) => setReferalData(res.data))
        getShareData().then((res) => setShareData(res.data))
        getBounsData().then((res) => setBounsData(res.data))
    }, [])

    return (
        <div className='Earnings grid'>
            <Header />
            <NavBar currPage={'Earnings'} />
            <div className="earnings_content">
                <div className='topRow'>
                    <CurrencyExchange userDetails={userDetails} />
                    <SocialMarketContent />
                    <ReferYourFriend />
                </div>
                <div className="downrow">
                    <div className='tables'>
                        <header>
                            <p> Earning Details</p>
                            <p> Lifetime Earning:
                                {
                                    likeData?.totalLikesEarning +
                                    referalData?.totalReferralsEarning +
                                    shareData?.totalSharesEarning +
                                    bounsData?.totalBonusesEarning
                                }
                            </p>
                        </header>
                        <Table data={{
                            title: 'Like Counters',
                            details: [
                                { text: 'Total Likes', value: likeData?.totalLikes || 0 },
                                { text: 'Paid Likes', value: likeData?.totalPaidLikes || 0 },
                                { text: 'Payble Likes', value: likeData?.totalPayableLikes || 0 },
                                { text: 'Lifetime earning coins', value: likeData?.totalLikesEarning || 0 },
                                { text: 'Payble coins', value: likeData?.totalPayableLikesEarning || 0 }
                            ]
                        }} />
                        <Table data={{
                            title: 'Referral Counters',
                            details: [
                                { text: 'Total Referral', value: referalData?.totalReferrals || 0 },
                                { text: 'Paid Referral', value: referalData?.totalPaidReferrals || 0 },
                                { text: 'Payble Referral', value: referalData?.totalPayableReferrals || 0 },
                                { text: 'Lifetime earning coins', value: referalData?.totalReferralsEarning || 0 },
                                { text: 'Payble coins', value: referalData?.totalPayableReferralsEarning || 0 }
                            ]
                        }} />
                        <Table data={{
                            title: 'Share Counters',
                            details: [
                                { text: 'Total Shares', value: shareData?.totalShares || 0 },
                                { text: 'Paid Shares', value: shareData?.totalPaidShares || 0 },
                                { text: 'Payble Shares', value: shareData?.totalPayableShares || 0 },
                                { text: 'Lifetime earning coins', value: shareData?.totalSharesEarning || 0 },
                                { text: 'Payble coins', value: shareData?.totalPayableSharesEarning || 0 }
                            ]
                        }} />
                        <Table data={{
                            title: 'Bonus Counters',
                            details: [
                                { text: 'Total Bonus', value: bounsData?.totalBonuses || 0 },
                                { text: 'Paid Bonus', value: bounsData?.totalPaidBonuses || 0 },
                                { text: 'Payble Bonus', value: bounsData?.totalPayableBonuses || 0 },
                                { text: 'Lifetime earning coins', value: bounsData?.totalBonusesEarning || 0 },
                                { text: 'Payble coins', value: bounsData?.totalPayableBonusesEarning || 0 }
                            ]
                        }} />
                        <header>Total Payable</header>
                        <Table data={{
                            title: 'Total Payable',
                            details: [
                                { text: 'Total Likes', value: likeData?.totalPayableLikes || 0 },
                                { text: 'Total Referrals', value: referalData?.totalPayableReferrals || 0 },
                                { text: 'Total Shares', value: shareData?.totalPayableShares || 0 },
                                { text: 'Total Additional Bonus', value: bounsData?.totalPayableBonuses || 0 },
                                { text: 'Total Payble Amount', value: likeData?.totalPayableLikesEarning || 0 }
                            ]
                        }} />
                    </div>
                </div>
            </div>
        </div>
    )
}