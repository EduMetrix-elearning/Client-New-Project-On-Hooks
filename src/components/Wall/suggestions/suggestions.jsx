import React, { useState } from 'react'
import './suggestions.scss'
import image_user from '../../../images/Wall/profilepic.jpeg'
import { useEffect } from 'react'
import { getStudentsToFollow } from '../../../api'

export default function Suggestions() {

    const [peoples, setPeoples] = useState([])

    useEffect(() => {
        async function asyncFuction() {
            const response = getStudentsToFollow()
            console.log(response.data)
            setPeoples(response.data)
        }
        asyncFuction()
    }, [])
    return (
        <div className='suggestions'>
            <div className="title">
                <h6>People suggestions</h6>
            </div>
            <div className='people'>
                <div>
                    <img src={image_user} alt="" />
                    <p>Muhammed Faisal</p>
                </div>
                <i className='fa fa-user-plus'></i>
            </div>
        </div>
    )
}