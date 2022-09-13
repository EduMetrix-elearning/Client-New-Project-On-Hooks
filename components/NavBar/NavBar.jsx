import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import image_home from '../../Assets/images/NavBar/home.png'
import image_chat from '../../Assets/images/NavBar/chat.png'
import image_search from '../../Assets/images/NavBar/search.png'
import image_setting from '../../Assets/images/NavBar/setting.png'
import image_history from '../../Assets/images/NavBar/history.png'
import image_dollar from '../../Assets/images/NavBar/dollar.png'
import image_group from '../../Assets/images/NavBar/group.png'
import image_speech_bubble from '../../Assets/images/NavBar/speech-bubble.png'


export default function NavBar({ currPage }) {

  const menus = [
    { title: 'Home', image_src: image_home.src, path: '/' },
    { title: 'Top pics for you', image_src: image_search.src, path: '/pics' },
    { title: 'Live chat', image_src: image_speech_bubble.src, path: '/chat' },
    { title: 'Find friends', image_src: image_group.src, path: '/find_friends' },
    { title: 'Earnings', image_src: image_dollar.src, path: '/earnings' },
    { title: 'Chatbot', image_src: image_chat.src, path: '/chatbot' },
    { title: 'My profile', image_src: image_setting.src, path: '/profile' },
    { title: 'Wallet', image_src: image_chat.src, path: '/wallet' },
    { title: 'Logout', image_src: image_history.src, path: '/logout' }
  ]

  return (
    <div className='NavBar'>

      <div className='Logo' >
        EduMetrix.io
      </div>

      <div>
        <ul>
          {
            menus &&
            menus.map((menu, index) => {
              return (
                <Link href={menu.path} key={index}>
                  <li>
                    <img src={menu.image_src} alt="" />
                    <span>{menu.title}</span>
                  </li>
                </Link>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}