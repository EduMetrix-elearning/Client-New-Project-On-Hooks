import React from 'react'
import './Home.scss'

import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'
import Wall from '../../components/Wall/Wall'
import Suggestions from '../../components/Suggestions/Suggestions'
import ChatBox from '../../components/ChatBox/ChatBox'
import PopUpAlert from '../../components/PopUpAlert/PopUpAlert'
import { useSelector } from 'react-redux'
import { useState } from 'react'

export default function Home() {

  const PopUp = useSelector((state) => state.PopUp)


  return (
    <div className='Home grid'>
      <NavBar currPage={'Home'} />
      <Header />
      <Wall />
      <Suggestions />
      <ChatBox/>
      {
        PopUp.show &&
        <PopUpAlert text={PopUp.text} />
      }
    </div>
  )
}