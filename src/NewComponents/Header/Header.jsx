import React from 'react'
import './Header.scss'

import image_logo from '../../asset/images/NavBar/coin.png'

export default function Header() {
    return (
        <div className='Header_2'>
            <div className="logo">
                <img src={image_logo} alt="" />
                <p>EduMetrix.io</p>
            </div>
            <div className='search'>
                <i className='fa fa-search' />
                <input type="text" />
            </div>
            <div className="profile">
                <i className='fa fa-user'/>
                <i className='fa fa-user'/>
                <i className='fa fa-user'/>
            </div>
        </div>
    )
}


