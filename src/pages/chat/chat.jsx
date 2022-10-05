import React from 'react'
import './Chat.scss'
import socket from '../../utils/socketIO_Util'

import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import ChatWindow from '../../components/_pages/Chat/ChatWindow/ChatWindow'
import FriendsList from '../../components/_pages/Chat/FriendsList/FriendsList'
import { useEffect } from 'react'
import UseSocket from '../../utils/socketIO_Util'
import { useRef } from 'react'
import { BACKEND_URL } from '../../constants/url'
import { userInfo } from '../../utils/localStorage_Utils'
import socket_io_Client from 'socket.io-client'

export default function Chat() {


    // useEffect(() => {
    // socket.on("CONVERSATION", (message) => {
    //     console.log(message)
    // })
    // }, [])
    console.log(
        socket_io_Client(BACKEND_URL, {
            query: {
                token: userInfo?.token,
                userID: userInfo?.id
            }
        })
    )


    // const sockref = useRef()
    // sockref.current = socket
    // console.log(sockref.current)




    function send() {
        // console.log('sended')
        // const message = {
        //     message: "Hello how are you",
        //     senderID: 3,
        //     receiverID: 45,
        //     sender_name: "faisal from",
        //     receiver_name: "faisal to",
        //     message_time: new Date()
        // };
        // socket.emit("CONVERSATION", message)
    }

    return (
        <div className='Chat grid'>
            <Header />
            <NavBar currPage={'Live chat'} />
            <ChatWindow send={send} />
            <FriendsList />
        </div>
    )
}