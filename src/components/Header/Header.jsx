import React from 'react'
import './Header.scss'

import image_bell from '../../asset/images/Header/AppBarNotification.png'
import image_message from '../../asset/images/Header/AppBarChat.png'
import image_user from '../../asset/images/Header/profilepic.jpeg'
import { userInfo } from '../../utils/localStorage_Utils'

export default function Header() {
    return (
        <div className='Header'>
            <div className="header_inner_div">
                <img src={image_bell} alt="" />
                <img src={image_message} alt="" />
                <img src={userInfo.photo} alt="" />
            </div>
        </div>
    )
}