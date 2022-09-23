import React from 'react'
import './DisplayFriends.scss'

import image_user from '../../../../asset/images/profilepic.jpeg'

export default function DisplayFriends() {
    return (
        <div className='DisplayFriends'>
            <div className=''>
                <img src={image_user} alt="" />
            </div>
            <div className='details'>
                <h6>Muhammed Faisal</h6>
                <p>India</p>
                <p>University</p>
                <p>College</p>
                <p>0 Followers</p>
                <p>Date</p>
            </div>
            <div className='align-end'>
                <button>
                    follow
                </button>
            </div>
        </div>
    )
}