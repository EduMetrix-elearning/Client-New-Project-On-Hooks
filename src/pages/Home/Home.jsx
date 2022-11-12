import React from 'react'
import './Home.scss'

import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'
import Wall from '../../components/_pages/Home/Wall/Wall'
import Suggestions from '../../components/_pages/Home/Suggestions/Suggestions'
import ChatBox from '../../components/ChatBox/ChatBox'
import PopUpAlert from '../../components/PopUpAlert/PopUpAlert'
import { useSelector } from 'react-redux'

export default function Home() {

  const PopUp = useSelector((state) => state.PopUp)


  return (
    <div className='Home'>
      <header>
        <Header />
      </header>
      <main>
        <Wall />
      </main>
      <NavBar currPage={'Home'} />
      <Suggestions />
      <ChatBox />
      {
        PopUp.show &&
        <PopUpAlert text={PopUp.text} />
      }
    </div>
  )
}