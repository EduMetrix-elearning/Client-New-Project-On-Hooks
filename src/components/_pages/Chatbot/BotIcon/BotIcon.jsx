import React from 'react'
import './BotIcon.scss'

import image_coin from '../../../../asset/images/coin.png'
import { useState } from 'react'
import Chatbot from 'react-simple-chatbot'
import { steps } from '../../../../utils/chatBot_steps_Util'

export default function BotIcon() {

    const [show, setShow] = useState(false)



    return (
        <div className='BotIcon'>
            {show &&
                <div className='chat_window'>
                    <svg onClick={() => setShow(false)} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
                    <Chatbot steps={steps} />
                </div>
            }
            <div className='image_div' onClick={() => setShow(!show)}>
                <img src={image_coin} alt="" />
            </div>
        </div>
    )
}