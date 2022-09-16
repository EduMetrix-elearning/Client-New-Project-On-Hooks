import React from 'react'
import './suggestions.scss'
import image_user from '../../../images/Wall/profilepic.jpeg'

export default function suggestions() {
    return (
        <div className='suggestions'>
            <div className="title">
                <h6>people suggestions</h6>
            </div>
            <div className='people'>
                <img src={image_user} alt="" />
                <p>Muhammed Faisal</p>
                <button>follow</button>
            </div>

        </div>
    )
}