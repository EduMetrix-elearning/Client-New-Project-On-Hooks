import React from 'react'
import './index.scss'
import { Outlet } from 'react-router-dom'

import Navigation from '../../components/_pages/AboutUs/Navigation/Navigation'


export default function AboutUsIndex() {
    return (
        <div className='AboutUsIndex'>
            <Navigation />
            <main>
                <Outlet />
            </main>
        </div >
    )
}