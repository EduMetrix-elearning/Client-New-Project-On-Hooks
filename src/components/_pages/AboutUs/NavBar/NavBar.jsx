import React from 'react'
import './NavBar.scss'

import { Link } from 'react-router-dom'

import image_about_us from '../../../../asset/images/AboutUs/Navbar/users.png'
import image_disclaimer from '../../../../asset/images/AboutUs/Navbar/stop.png'
import image_privacy_policy from '../../../../asset/images/AboutUs/Navbar/lock.png'
import image_terms from '../../../../asset/images/AboutUs/Navbar/list.png'
import image_white_paper from '../../../../asset/images/AboutUs/Navbar/whitepaper.svg'
import image_contact from '../../../../asset/images/AboutUs/Navbar/phone.png'

export default function NavBar() {
    return (
        <div className='NavBar'>
            <nav>
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