import React from 'react'
import './PopUpAlert.scss'

export default function PopUpAlert({ text }) {
    return (
        <div className='PopUpAlert'>
            <div className="frame">
                <p>{text}</p>
            </div>
        </div>
    )
}