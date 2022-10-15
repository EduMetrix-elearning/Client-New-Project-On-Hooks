import React, { useState } from 'react'
import { useEffect } from 'react'
import { getAllStudents, getConversation } from '../../api'
import { userInfo } from '../../utils/localStorage_Utils'
import socket from '../../utils/socketIO_Util'
import './ChatBox.scss'

export default function ChatBox() {

    const [show, setShow] = useState(true)
    const [allStudents, setAllStudents] = useState([])
    const [activeUsers, setActiveUsers] = useState([])
    const [currentChats, setCurrentChats] = useState([])

    useEffect(() => {
        socket.on('checkOnlineUsers', (activeUsers) => {
            setActiveUsers(allStudents.filter((student) => {
                return activeUsers[student.student_id]
            }))
        })
    }, [allStudents])

    function fetchConversations(receiver) {
        getConversation({ senderId: userInfo.id, receiverId: receiver })
            .then((res) => { setCurrentChats(res.data.responseResult.result) })
            .catch((err) => { console.log(err) })
    }

    useEffect(() => {
        getAllStudents().then((res) => setAllStudents(res.data.data)).catch((err) => console.log(err))
    }, [])

    // console.log(activeUsers)
    console.log(currentChats)

    return (
        <div className='ChatBox'>
            <header onClick={() => setShow(!show)}>
                <i className='fas fa-comment' />Messages
            </header>
            {show &&
                <main>
                    <div className='chat_list'>
                        {activeUsers.map((user, i) => {
                            return (
                                <div key={i} className="user" onClick={() => fetchConversations(user.student_id)}>
                                    <img src={user.student_photo} alt="" />
                                    <p>{user.student_fname} {user.student_lname}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className='input_area'>
                        <input type="text" />
                    </div>
                </main>
            }
        </div>
    )
}