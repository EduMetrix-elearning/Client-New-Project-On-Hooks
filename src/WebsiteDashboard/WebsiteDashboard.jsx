import React from 'react'
import Header, { DashBoardHeader } from './Header'
import { MainDashboardHeader } from './MainDashboardHeader'
import { DashBoardNavbar } from './Navbar'

export const WebsiteDashboard = () => {
  return (
    <div>
        <DashBoardHeader/>
      <MainDashboardHeader/>
    </div>
  )
}
