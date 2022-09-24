import React from 'react'
import './BotIcon.scss'

import image_coin from '../../../../asset/images/coin.png'
import { useState } from 'react'

export default function BotIcon() {

    const [show, setShow] = useState(false)

    return (
        <div className='BotIcon'>
            {show &&
                <div className='chat_window'>
                    <i className='fa fa-close' onClick={()=>setShow(false)}/>
                    
                </div>
            }
            <div className='image_div' onClick={() => setShow(!show)}>
                <img src={image_coin} alt="" />
            </div>
        </div>
    )
}