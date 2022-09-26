import React from 'react'
import './ProfileView.scss'

import image_user from '../../../../asset/images/profilepic.jpeg'

export default function ProfileView() {
    return (
        <div className='ProfileView'>
            <div className='image justify-center align-center'>
                <img src={image_user} alt="" />
            </div>
            <div className='personal'>
                <h5>Muhammed Faisal</h5>
                <div className='id'>
                    <p>Edumetrix56934 <i className='fa fa-copy' /></p>
                    <p>score : 100%</p>
                </div>
                <div className='followings'>
                    <p>100 Followers</p>
                    <p>100 Following</p>
                </div>
            </div>
            <span className='separator'></span>
            <div className='professional'>
                <p>About</p>
                <p>Hobbies</p>
                <p>Skills</p>
                <p>Qualifications</p>
                <p>Life goals</p>
            </div>
        </div>
    )
}