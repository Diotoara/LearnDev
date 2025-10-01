import { div } from 'motion/react-client'
import React from 'react'
import RevenueCard  from './components/RevenueCard'
import Payout from './components/Payout'
import Sidebar from './components/Sidebar'
import Cards from './sections/Home'


const dashboard = () => {
  return (
    <>
    <div className='flex'>

      <div>
        <Sidebar/>
      </div>

      <div className='flex-1'>
        <Cards/>
      </div>

    </div>


    </>
  )
}

export default dashboard