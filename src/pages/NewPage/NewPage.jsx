import React, { useState } from 'react'
import './NewPage.scss'

import image_logo from '../../asset/images/NavBar/coin.png'

export default function NewPage() {

    const [page, setPage] = useState('Home')

    return (
        <div className='NewPage'>
            <div className="nav">
                <div className="logo">
                    <img src={image_logo} alt="" />
                    <p>EduMetrix.io</p>
                </div>
                <div className='menu'>
                    <ul>
                        <li className={page === "Home" ? "active" : ""} onClick={() => setPage("Home")}><i className='fa fa-home'></i>Home</li>
                        <li className={page === "DesignGroups" ? "active" : ""} onClick={() => setPage("DesignGroups")}><i className='fa fa-home'></i>Design Groups</li>
                        <li className={page === "Trends" ? "active" : ""} onClick={() => setPage("Trends")}><i className='fa fa-home'></i>Trends</li>
                        <li className={page === "Designers" ? "active" : ""} onClick={() => setPage("Designers")}><i className='fa fa-home'></i>Designers</li>
                        <li className={page === "Jobs" ? "active" : ""} onClick={() => setPage("Jobs")}><i className='fa fa-home'></i>Jobs</li>
                        <li className={page === "Meetups" ? "active" : ""} onClick={() => setPage("Meetups")}><i className='fa fa-home'></i>Meetups</li>
                        <li className={page === "Workshops" ? "active" : ""} onClick={() => setPage("Workshops")}><i className='fa fa-home'></i>Workshops</li>
                        <li className={page === "Adobe" ? "active" : ""} onClick={() => setPage("Adobe")}><i className='fa fa-home'></i>Adobe MAX</li>
                        <li className={page === "DesignTech" ? "active" : ""} onClick={() => setPage("DesignTech")}><i className='fa fa-home'></i>Design Tech</li>
                        <li className={page === "Settings" ? "active" : ""} onClick={() => setPage("Settings")}><i className='fa fa-home'></i>Settings</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}