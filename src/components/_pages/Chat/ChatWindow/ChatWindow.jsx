import React, { useState, useEffect } from 'react'
import { getConversation } from '../../../../api'
import { userInfo } from '../../../../utils/localStorage_Utils'
import socket from '../../../../utils/socketIO_Util'
import './ChatWindow.scss'

import image_chat from '../../../../asset/images/Chat/chat.png'

export default function ChatWindow({ currentChat }) {

    const [chats, setChats] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {
        fetchConversations()
        return (() => {
            setInput('')
            setChats([])
        })
    }, [currentChat])

    socket.on('REFRESH_CONVERSATION', () => {
        setChats()
        fetchConversations()
    })

    async function fetchConversations() {
        setChats([])
        const response = await getConversation({ senderId: userInfo.id, receiverId: currentChat?.student_id })
        // console.log(response.data.responseResult.result)
        setChats((state) => ([...response.data.responseResult.result]))
    }

    console.log(chats)

    function sendMessage() {
        let message = {
            message: input,
            senderID: userInfo.id,
            receiverID: currentChat?.student_id,
            sender_name: userInfo.user_name,
            receiver_name: currentChat?.student_fname + currentChat?.student_lname,
            message_time: new Date()
        };
        socket.emit("CONVERSATION", message)
        socket.emit("REFRESH_CONVERSATION", { receiverID: currentChat?.student_id })
        setChats((state) => ([...state, message]))
        setInput('')
    }
    return (
        <div className='ChatWindow'>
            {currentChat ?
                <div className='chat_window_inner_div'>
                    <header>
                        <img src={currentChat?.student_photo} alt="" />
                        <p>{currentChat?.student_fname}{currentChat?.student_lname}</p>
                    </header>
                    <div className='chat_screen'>
                        {
                            chats.map((chat, i) => {
                                return (
                                    <div key={i} className={`chat ${userInfo.id === chat.senderID ? 'self' :
                                        currentChat.student_id === chat.senderID && 'other'}`} >
                                        <p>{chat.message}</p>
                                        <p>{chat.sender_name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='chat_input'>
                        <input type="text" value={input}
                            onChange={(e) => setInput(e.target.value)} />
                        <div className='icons'>
                            <i className='far fa-grin'></i>
                            <i className='fa fa-paperclip'></i>
                            <i className='fa fa-paper-plane' onClick={sendMessage}></i>
                        </div>
                    </div>
                </div>
                :
                <div className='landing'>
                    <img src={image_chat} alt="" />
                    <h5>Chat with you friends</h5>
                    <p>Here you can chat with your friends. Select a friend to start your chat.</p>
                </div>
            }
        </div >
    )
}