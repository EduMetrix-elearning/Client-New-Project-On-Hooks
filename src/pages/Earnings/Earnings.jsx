import React from 'react'
import './Earnings.scss'

import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'
import CurrencyExchange from '../../components/_pages/Earnings/CurrencyExchange/CurrencyExchange'
import SocialMarketContent from '../../components/_pages/Earnings/SocialMarketContent/SocialMarketContent'
import ReferYourFriend from '../../components/_pages/Earnings/ReferYourFriend/ReferYourFriend'

export default function Earnings() {
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
            </div>
        </div>
    )
}