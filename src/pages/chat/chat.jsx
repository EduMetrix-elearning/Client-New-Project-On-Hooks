import React from 'react'
import './chat.scss'

import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import ChatWindow from '../../components/_pages/Chat/ChatWindow/ChatWindow'
import FriendsList from '../../components/_pages/Chat/FriendsList/FriendsList'

export default function Chat() {

    return (
        <div className='Chat grid'>
            <Header />
            <NavBar currPage={'Live chat'} />
            <ChatWindow />
            <FriendsList />
        </div>
    )
}