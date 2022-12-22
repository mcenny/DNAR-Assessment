import React, { useState } from 'react'
import { DashboardStyle } from './styles/dashboardStyle'
import { HiMenuAlt4 } from 'react-icons/hi'
import { SiMarketo } from 'react-icons/si'
import { IoStatsChart } from 'react-icons/io5'
import { Market } from './market'

export const Dashboard = () => {

  const [activeMenu, setActiveMenu] = useState({market: true, analytics: false})

  return (
    <DashboardStyle>
        <div className='dashboardWrapper'>
          <div className='sider'>
            <div className='menu' >
              <HiMenuAlt4 />
            </div>
            <div className='sidebar'>
              <span className={activeMenu.market ? 'menuItem' : 'unselectedMenu'} onClick={() => {setActiveMenu({market: true, analytics: false})}}>
                <SiMarketo />
              </span>
              <span className={activeMenu.analytics ? 'menuItem' : 'unselectedMenu'} onClick={() => {setActiveMenu({market: false, analytics: true})}}>
                <IoStatsChart />
              </span>
            </div>
          </div>
          <div className='main'>
            <Market />
          </div>
        </div>
    </DashboardStyle>
  )
}
