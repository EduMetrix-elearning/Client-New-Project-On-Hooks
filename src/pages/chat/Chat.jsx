import React, { useState } from 'react'
import './Chat.scss'

import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import ChatWindow from '../../components/_pages/Chat/ChatWindow/ChatWindow'
import FriendsList from '../../components/_pages/Chat/FriendsList/FriendsList'


export default function Chat() {

    const [currentChat, setCurrentChat] = useState()

    return (
        <div className='Chat'>
            <header>
                <Header />
            </header>
            <main>
                <ChatWindow currentChat={currentChat} />
            </main>
            <NavBar currPage={'Live chat'} />
            <FriendsList setCurrentChat={setCurrentChat} />
        </div>
    )
}