import React, { useState, useRef, useEffect } from 'react'
import { getAllStudents, getConversation } from '../../api'
import { userInfo } from '../../utils/localStorage_Utils'
import socket from '../../utils/socketIO_Util'
import './ChatBox.scss'

export default function ChatBox() {

    const pageBottom = useRef()

    const [show, setShow] = useState(false)
    const [allStudents, setAllStudents] = useState([])
    const [activeUsers, setActiveUsers] = useState([])
    const [currentChats, setCurrentChats] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {
        pageBottom.current?.scrollIntoView({ behavior: "smooth" })
    }, [pageBottom.current, currentChats])


    useEffect(() => {
        socket.on('checkOnlineUsers', (activeUsers) => {
            setActiveUsers(allStudents.filter((student) => {
                return activeUsers[student.student_id] && student.student_id !== userInfo.id
            }))
        })
    }, [allStudents])

    useEffect(() => {
        getAllStudents().then((res) => setAllStudents(res.data.data)).catch((err) => console.log(err))
    }, [])

    function fetchConversations(receiver) {
        getConversation({ senderId: userInfo.id, receiverId: receiver })
            .then((res) => { setCurrentChats(res.data.responseResult.result) })
            .catch((err) => { console.log(err) })
    }

    function sendMessage() {
        let message = {
            message: input,
            senderID: userInfo.id,
            receiverID: currentChats?.student_id,
            sender_name: userInfo.user_name,
            receiver_name: currentChats?.student_fname + currentChats?.student_lname,
            message_time: new Date()
        };
        socket.emit("CONVERSATION", message)
    }

    // console.log(activeUsers)
    // console.log(currentChats)

    return (
        <div className='ChatBox'>
            <div className='header' onClick={() => setShow(!show)}>
                <i className='fa fa-comment' />Messages
            </div>
            {show &&
                <div className='content'>
                    <div className='chat_list'>
                        {!currentChats.length ?
                            activeUsers.map((user, i) => {
                                return (
                                    <div key={i} className="user" onClick={() => fetchConversations(user.student_id)}>
                                        <img src={user.student_photo} alt="" />
                                        <p>{user.student_fname} {user.student_lname}</p>
                                    </div>
                                )
                            }) :
                            <div className='chatting_box'>
                                <div className='chats'>
                                    {currentChats.map((chat, i) => {
                                        return (
                                            <p key={i} className={' message ' + (userInfo.id === chat.senderID ? 'right' : 'left')}>{chat.message}</p>
                                        )
                                    })}
                                    <span ref={pageBottom}></span>
                                </div>
                                <div className='footer'>
                                    <span className='fa fa-angle-left' onClick={() => setCurrentChats([])}></span>
                                    <input type="text" onChange={(e) => setInput(e.target.value)} />
                                    <span className='fa fa-paper-plane' onClick={(e) => sendMessage()}></span>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    )
}