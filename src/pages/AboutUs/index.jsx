import React from 'react'
import './index.scss'
import { Outlet } from 'react-router-dom'

import Header from '../../components/_pages/AboutUs/Header/Header'
import NavBar from '../../components/_pages/AboutUs/NavBar/NavBar'


export default function AboutUsIndex() {
    return (
        <div className='AboutUsIndex'>
            <Header />
            <NavBar />
            <main>
                <Outlet />
            </main>
        </div >
    )
}