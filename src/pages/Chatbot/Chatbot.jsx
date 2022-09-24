import React from 'react'

import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import BotIcon from '../../components/_pages/Chatbot/BotIcon/BotIcon'

export default function ChatBot() {
    return (
        <div className='ChatBot grid'>
            <Header />
            <NavBar currPage={'Chatbot'} />
            <BotIcon />
        </div>
    )
}