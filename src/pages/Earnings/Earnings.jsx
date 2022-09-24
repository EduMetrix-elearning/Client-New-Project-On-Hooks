import React from 'react'
import './Earnings.scss'

import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'
import CurrencyExchange from '../../components/_pages/Earnings/CurrencyExchange/CurrencyExchange'
import SocialMarketContent from '../../components/_pages/Earnings/SocialMarketContent/SocialMarketContent'
import ReferYourFriend from '../../components/_pages/Earnings/ReferYourFriend/ReferYourFriend'
import Table from '../../components/_pages/Earnings/Table/Table'

export default function Earnings() {

    const table1 = {
        title: 'Like Counters',
        details: [
            { text: 'Total Likes', value: 0 },
            { text: 'Paid Likes', value: 0 },
            { text: 'Payble Likes', value: 0 },
            { text: 'Lifetime earning coins', value: 0 },
            { text: 'Payble coins', value: 0 }
        ]
    }
    const table2 = {
        title: 'Referral Counters',
        details: [
            { text: 'Total Referral', value: 0 },
            { text: 'Paid Referral', value: 0 },
            { text: 'Payble Referral', value: 0 },
            { text: 'Lifetime earning coins', value: 0 },
            { text: 'Payble coins', value: 0 }
        ]
    }
    const table3 = {
        title: 'Share Counters',
        details: [
            { text: 'Total Shares', value: 0 },
            { text: 'Paid Shares', value: 0 },
            { text: 'Payble Shares', value: 0 },
            { text: 'Lifetime earning coins', value: 0 },
            { text: 'Payble coins', value: 0 }
        ]
    }
    const table4 = {
        title: 'Bonus Counters',
        details: [
            { text: 'Total Bonus', value: 0 },
            { text: 'Paid Bonus', value: 0 },
            { text: 'Payble Bonus', value: 0 },
            { text: 'Lifetime earning coins', value: 0 },
            { text: 'Payble coins', value: 0 }
        ]
    }
    const table5 = {
        title: 'Total Payable',
        details: [
            { text: 'Total Likes', value: 0 },
            { text: 'Total Referrals', value: 0 },
            { text: 'Total Shares', value: 0 },
            { text: 'Total Additional Bonus', value: 0 },
            { text: 'Total Payble Amount', value: 0 }
        ]
    }

    return (
        <div className='Earnings grid'>
            <Header />
            <NavBar currPage={'Earnings'} />
            <div className="earnings_content">
                <div className='topRow'>
                    <CurrencyExchange />
                    <SocialMarketContent />
                    <ReferYourFriend />
                </div>
                <div className="downrow">
                    <div className='tables'>
                        <header>
                            <p> Earning Details</p>
                            <p> Lifetime Earning: 0</p>
                        </header>
                        <Table data={table1} />
                        <Table data={table2} />
                        <Table data={table3} />
                        <Table data={table4} />
                        <header>Total Payable</header>
                        <Table data={table5} />
                    </div>
                </div>
            </div>
        </div>
    )
}