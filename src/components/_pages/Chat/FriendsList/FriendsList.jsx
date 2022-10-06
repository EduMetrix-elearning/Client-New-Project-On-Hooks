import React, { useState, useEffect } from 'react'
import './FriendsList.scss'

import { getAllStudents } from '../../../../api'
import socket from '../../../../utils/socketIO_Util'
import { userInfo } from '../../../../utils/localStorage_Utils'

export default function FriendsList({ setCurrentChat }) {

    const [allStudents, setAllStudents] = useState([])
    const [searchKey, setSearchKey] = useState('')
    const [activeFriends, setActiveFriends] = useState()

    useEffect(() => {
        async function asyncFunction() {
            const response = await getAllStudents()
            setAllStudents(response.data.data)
        }
        asyncFunction()

        socket.on('checkOnlineUsers', (users) => {
            // console.log(users)
            setActiveFriends(state => ({ ...state, ...users }))
        })

    }, [])

    // console.log(activeFriends)

    return (
        <div className='FriendsList'>
            <div className="search_input">
                <i className='fa fa-search'></i>
                <input type="text" placeholder='Search friends' onChange={(e) => setSearchKey(e.target.value)} />
            </div>
            <hr />
            <div className="friends_list">
                {allStudents &&
                    allStudents
                        .filter((student) => {
                            const key = searchKey.toLowerCase()
                            const name = student.student_fname.toLowerCase() + " " + student.student_lname.toLowerCase()
                            return name.startsWith(key) && student.student_id !== userInfo.id
                        })
                        .map((student, i) => {
                            // console.log(student)
                            return (
                                <div className="friend" key={i} onClick={() => setCurrentChat(student)}>
                                    <img src={student.student_photo} alt="" />
                                    <p>{student.student_fname} {student.student_lname}</p>
                                    {activeFriends?.[student.student_id] && <span />}
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}