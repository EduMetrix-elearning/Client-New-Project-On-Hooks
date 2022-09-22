import React, { useState, useEffect } from 'react'
import './FriendsList.scss'

import { getAllStudents } from '../../../../api'

export default function FriendsList() {

    const [allStudents, setAllStudents] = useState([])
    const [searchKey, setSearchKey] = useState('')

    useEffect(() => {
        async function asyncFunction() {
            const response = await getAllStudents()
            setAllStudents(response.data.data)
        }
        asyncFunction()
    }, [])

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
                            return name.startsWith(key)
                        })
                        .map((student, i) => {
                            return (
                                <div className="friend" key={i}>
                                    <img src={student.student_photo} alt="" />
                                    <p>{student.student_fname} {student.student_lname}</p>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}