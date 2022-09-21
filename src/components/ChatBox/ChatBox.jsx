import React, { useState } from 'react'
import './ChatBox.scss'

export default function ChatBox() {

    const [show, setShow] = useState(false)

    return (
        <div className='ChatBox'>
            <header onClick={() => setShow(!show)}>
                <i className='fas fa-comment' />Messages
            </header>
            {
                show &&
                <main>
                    <p>friends</p>
                    <p>friends</p>
                    <p>friends</p>
                    <p>friends</p>
                </main>
            }
        </div>
    )
}