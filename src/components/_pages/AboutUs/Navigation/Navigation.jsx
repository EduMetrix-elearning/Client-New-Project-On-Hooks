import React, { useEffect, useState } from 'react'
import './Navigation.scss'

import { Link } from 'react-router-dom'

import image_about_us from '../../../../asset/images/AboutUs/Navbar/users.png'
import image_disclaimer from '../../../../asset/images/AboutUs/Navbar/stop.png'
import image_privacy_policy from '../../../../asset/images/AboutUs/Navbar/lock.png'
import image_terms from '../../../../asset/images/AboutUs/Navbar/list.png'
import image_white_paper from '../../../../asset/images/AboutUs/Navbar/whitepaper.svg'
import image_contact from '../../../../asset/images/AboutUs/Navbar/phone.png'

import image_coin from '../../../../asset/images/coin.png'

export default function Navigation() {

    const [showNav, setShowNav] = useState(false)

    useEffect(() => {
        let navDrop = document.getElementById('navDrop')
        document.body.addEventListener('click', (e) => {
            if (!(navDrop?.contains(e.target) || e.target.id === 'hamburger')) {
                setShowNav(false)
            }
        })
    }, [showNav])

    return (
        <div className='Navigation'>
            <div className='header'>
                <a className='backButton' href='/login'><i className='fa fa-angle-left' /> Back to login</a>
                <a title='Back to login' href='/login'><i className='fa fa-angle-left' /></a>
                <i className='fa fa-bars' id='hamburger' onClick={() => setShowNav(!showNav)} />
                <div className="logo">
                    <img src={image_coin} alt="" />
                    <h3>EduMetrix</h3>
                </div>
            </div>
            <nav className={showNav ? 'show' : null} id={showNav ? 'navDrop' : null}>
                <ul>
                    <li><Link to={''}><span><img src={image_about_us} alt="" /></span><p>About Us</p></Link></li>
                    <li><Link to={'disclaimer'}><span><img src={image_disclaimer} alt="" /></span><p>Disclaimer</p></Link></li>
                    <li><Link to={'privacy_policy'}><span><img src={image_privacy_policy} alt="" /></span><p>Privay Policy</p></Link></li >
                    <li><Link to={'terms_of_services'}><span><img src={image_terms} alt="" /></span><p>Terms of Service</p></Link></li >
                    <li><Link to={'white_paper'}><span><img src={image_white_paper} alt="" /></span><p>White Paper</p></Link></li >
                    <li><Link to={'contact_us'}><span><img src={image_contact} alt="" /></span><p>Contact Us</p></Link></li >
                </ul >
            </nav>
        </div >
    )
}