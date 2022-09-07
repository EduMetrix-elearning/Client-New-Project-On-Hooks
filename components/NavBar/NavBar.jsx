import React from 'react'
import image_home from '../../Assets/images/NavBar/chat.png'
// import './NavBar.scss'

export default function NavBar() {
  return (
    <div className='NavBar'>
      <h1>Navbar</h1>
      <ul>
        <img src={image_home} alt="" />
        <li>
          Home
        </li>
        <li>
          Top Pics For you
        </li>
        <li>
          Live chat
        </li>
        <li>
          Find Friends
        </li>
        <li>
          Earnings
        </li>
        <li>
          Chatbot
        </li>
        <li>
          My profile
        </li>
        <li>
          Wallet
        </li>
        <li>
          Log out
        </li>
      </ul>
    </div>
  )
}