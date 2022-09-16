import React from 'react'
import './Header.scss'

import image_bell from '../../images/Header/AppBarNotification.png'
import image_message from '../../images/Header/AppBarChat.png'
import image_user from '../../images/Header/profilepic.jpeg'

export default function Header() {
    return (
        <div className='Header'>
            <div className="header_inner_div">
                <img src={image_bell} alt="" />
                <img src={image_message} alt="" />
                <img src={image_user} alt="" />
            </div>
        </div>
    )
}