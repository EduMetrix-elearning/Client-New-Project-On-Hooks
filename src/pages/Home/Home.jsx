import React from 'react'
import './Home.scss'

import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'
import Wall from '../../components/Wall/Wall'
import Suggestions from '../../components/Suggestions/Suggestions'
import ChatBox from '../../components/ChatBox/ChatBox'

export default function Home() {
  return (
    <div className='Home grid'>
      <NavBar currPage={'Home'} />
      <Header />
      <Wall />
      <Suggestions />
      <ChatBox />
    </div>
  )
}