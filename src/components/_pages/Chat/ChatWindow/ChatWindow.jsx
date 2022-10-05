import React from 'react'
import './ChatWindow.scss'

export default function ChatWindow({ send }) {
    return (
        <div className='ChatWindow'>
            <header>
                <img src="" alt="" />
            </header>
            <div className='chat_screen'>

            </div>
            <div className='chat_input'>
                <input type="text" />
                <div className='icons'>
                    <i className='far fa-grin'></i>
                    <i className='fa fa-paperclip'></i>
                    <i className='fa fa-paper-plane' onClick={send}></i>
                </div>
            </div>
        </div>
    )
}