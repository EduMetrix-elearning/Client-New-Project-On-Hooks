import React, { useState } from 'react'
import { useEffect } from 'react'
import './Modal.scss'

export default function Modal({ show, setShow, children }) {

    function handleParentClick(e) {
        if (e.target === e.currentTarget) setShow(false)
    }

    return (
        <div className='Modal' hidden={!show} onClick={handleParentClick}>
            <div className='Modal_body' >
                <svg onClick={() => setShow(false)} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
                {children}
            </div>
        </div>
    )
}