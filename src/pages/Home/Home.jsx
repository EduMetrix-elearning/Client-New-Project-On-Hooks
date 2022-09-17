import React, { useEffect, useState } from 'react'

import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'
import Wall from '../../components/Wall/Wall'
import Suggestions from '../../components/Wall/suggestions/Suggestions'
import { getPost } from '../../api'

export default function Home() {

  return (
    <div>
      <NavBar currPage={'Home'} />
      <div>
        <Header />
        <Wall />
        <Suggestions />
      </div>

    </div>
  )
}