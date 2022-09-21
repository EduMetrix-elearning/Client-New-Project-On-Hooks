import React, { useEffect, useState } from 'react'
import './chat.scss'

import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import { getAllStudents } from '../../api'

export default function Chat() {

    const [allStudents, setAllStudents] = useState()

    useEffect(() => {
        async function asyncFunction() {
            const response = await getAllStudents()
            setAllStudents(response.data.data)
        }
        asyncFunction()
    }, [])

    return (
        <div className='Chat grid'>
            <Header />
            <NavBar currPage={'Live chat'} />

            <div className='chat_content'>
                <header>
                    <img src="" alt="" />
                </header>
                <div className='chat_screen'>

                </div>
                <div className='chat_input'>
                    <input type="text" />
                    <div className='icons'>
                        <i className='far fa-grin'></i>
                        <i className='fa fa-paperclip'></i>
                        <i className='fa fa-paper-plane'></i>
                    </div>
                </div>
            </div>

            <div className='chat_friends_list'>
                <div className="search_input">
                    <input type="text" />
                </div>
                <div className="friends_list">
                    {allStudents &&
                        allStudents.map((student, i) => {
                            return (
                                <div className="friend" key={i}>
                                    <img src={student.student_photo} alt="" />
                                    <p></p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}