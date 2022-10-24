import React from 'react'
import Header from '../../../components/_pages/AboutUs/Header/Header'
import NavBar from '../../../components/_pages/AboutUs/NavBar/NavBar'
import './AboutUs.scss'

export default function AboutUs() {
    return (
        <div className='AboutUs'>
            <Header />
            <NavBar />
            <h1>About Us</h1>
        </div>
    )
}