import React from 'react'
import { useEffect } from 'react'
import './ToolTip.scss'

export default function ToolTip({ show, setShow, button, children }) {

    const key = new Date().getTime();

    useEffect(() => {
        let ToolTip = document.getElementById('ToolTip' + key)
        document.body.addEventListener('click', (e) => {
            if (!(ToolTip?.contains(e.target) || e.target.id === button)) {
                setShow(false)
            }
        })
    }, [])

    return (
        <div className='ToolTip' id={'ToolTip' + key} hidden={!show} onClick={() => setShow(true)}>
            {children}
        </div>
    )
}