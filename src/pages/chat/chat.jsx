import React, { useState } from 'react'
import './Chat.scss'

import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import ChatWindow from '../../components/_pages/Chat/ChatWindow/ChatWindow'
import FriendsList from '../../components/_pages/Chat/FriendsList/FriendsList'


export default function Chat() {

    const [currentChat, setCurrentChat] = useState()

    return (
        <div className='Chat grid'>
            <Header />
            <NavBar currPage={'Live chat'} />
            <ChatWindow currentChat={currentChat} />
            <FriendsList setCurrentChat={setCurrentChat} />
        </div>
    )
}