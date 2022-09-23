import React from 'react'
import './NavBar.scss'

import image_home from '../../asset/images/NavBar/home.png'
import image_chat from '../../asset/images/NavBar/chat.png'
import image_setting from '../../asset/images/NavBar/setting.png'
import image_search from '../../asset/images/NavBar/search.png'
import image_history from '../../asset/images/NavBar/history.png'
import image_dollar from '../../asset/images/NavBar/dollar.png'
import image_group from '../../asset/images/NavBar/group.png'
import image_speech_bubble from '../../asset/images/NavBar/speech-bubble.png'
import image_user from '../../asset/images/NavBar/profilepic.jpeg'
import image_coin from '../../asset/images/NavBar/coin.png'

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userLogout } from '../../slices/authSlice'

export default function NavBar({ currPage }) {

  const dispatch = useDispatch()

  const menus = [
    { title: 'Home', image_src: image_home, path: '/' },
    { title: 'Top pics for you', image_src: image_search, path: '/pics' },
    { title: 'Live chat', image_src: image_speech_bubble, path: '/chat' },
    { title: 'Find friends', image_src: image_group, path: '/find_friends' },
    { title: 'Earnings', image_src: image_dollar, path: '/earnings' },
    { title: 'Chatbot', image_src: image_chat, path: '/chatbot' },
    { title: 'My profile', image_src: image_setting, path: '/profile' },
    { title: 'Wallet', image_src: image_chat, path: '/wallet' },
    { title: 'Logout', image_src: image_history, path: '', onclick: () => dispatch(userLogout()) }
  ]

  return (
    <div className='NavBar'>
      <div className='network_div justify-center'>
        <div>
          <p>100</p>
          <p>Followers</p>
        </div>
        <div>
          <p>100</p>
          <p>Followings</p>
        </div>
      </div>
      <div className='logo' >
        <div className='justify-center'>
          <img src={image_coin} alt="" />
        </div>
        <p>EduMetrix.io</p>
      </div>
      <div>
        <ul>
          {
            menus &&
            menus.map((menu, index) => {
              return (
                <Link to={menu.path} key={index} onClick={menu.onclick}>
                  <li className={currPage === menu.title ? 'active' : ''}>
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