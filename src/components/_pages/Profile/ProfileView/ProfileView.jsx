import React from 'react'
import './ProfileView.scss'
import { userInfo } from '../../../../utils/localStorage_Utils'

export default function ProfileView() {
    return (
        <div className='ProfileView'>
            <div className='image justify-center align-center'>
                <img src={userInfo.photo} alt="" />
            </div>
            <div className='personal'>
                <h5>{userInfo.user_name}</h5>
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