import { div } from 'motion/react-client'
import React from 'react'
import RevenueCard  from './components/RevenueCard'
import Payout from './components/Payout'
const dashboard = () => {
  return (
    <>
    <div className='pl-[224px]'>
      <div className='flex justify-around'>
        <div>
          <Payout text={"Next Payout"} amount={"₹2,312.23"} num={"23"} due={"Next Payment Date:"} date={"Today, 4:00PM"}/>
        </div>

        <div>
          <RevenueCard head={"Amount Pending"} amount={"₹92,312.20"} num={"13 orders >"}/>
        </div>
        
        
        <div>
          <RevenueCard head={"Amount Processed"} amount={"₹23,92,312.19"}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default dashboard