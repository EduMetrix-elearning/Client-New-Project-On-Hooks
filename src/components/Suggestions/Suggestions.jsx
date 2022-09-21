import React, { useState } from 'react'
import './suggestions.scss'
import { useEffect } from 'react'
import { getStudentsToFollow } from '../../api'

export default function Suggestions() {

    const [peoples, setPeoples] = useState([])

    useEffect(() => {
        async function asyncFuction() {
            const response = await getStudentsToFollow()
            setPeoples(response.data.data)
        }
        asyncFuction()
    }, [])
    return (
        <div className='suggestions'>
            <div className="title">
                <h6>People suggestions</h6>
            </div>
            <div className="suggestions_inner_div">
                {peoples &&
                    peoples.map((people, i) => {
                        return (
                            <div className='people' key={i}>
                                <div>
                                    <img src={people.student_photo} alt="" />
                                    <p>{people.student_fname + " " + people.student_lname}</p>
                                </div>
                                <i className='fa fa-user-plus'></i>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}