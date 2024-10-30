import React from 'react'
import { Outlet } from 'react-router-dom'
import BottomNavigation from '../ui/BottomNavigation'

const MainLayouts = () => {
  return (
    <div>
        <Outlet/>
        <BottomNavigation/>
    </div>
  )
}

export default MainLayouts