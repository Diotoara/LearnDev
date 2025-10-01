import { div } from 'motion/react-client'
import React from 'react'
import RevenueCard  from './components/RevenueCard'

const dashboard = () => {
  return (
    <div>
      <RevenueCard head={"Amount Pending"} amount={"₹92,312.20"} num={13}/>
    </div>
  )
}

export default dashboard