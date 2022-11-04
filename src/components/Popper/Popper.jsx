import React from 'react'
import { useEffect } from 'react';
import './Popper.scss'

export default function Popper({ children, show, setShow, button }) {

    const key = new Date().getTime();

    useEffect(() => {
        let Popper = document.getElementById('Popper' + key)
        document.body.addEventListener('click', (e) => {
            if (!(Popper?.contains(e.target) || e.target.id === button)) {
                setShow(false)
            }
        })
    }, [])

    return (
        <div className='Popper' id={'Popper' + key} hidden={!show}>
            {children}
        </div>
    )
}