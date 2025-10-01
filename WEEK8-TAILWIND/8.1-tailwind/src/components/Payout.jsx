import { div } from 'motion/react-client'
import React from 'react'

const Payout = ({text, amount, num, due, date}) => {
  return (
    <div className=' bg-[#146fb5] shadow-lg w-100 h-40 rounded-md flex flex-col justify-center '>
      <div className='text-white text-[18px] px-4 py-3 '>
        {text}
      </div>

      <div className='flex justify-between items-center px-4 py-3'>
        <div className='font-medium text-3xl text-white'>
          {amount}
        </div>
        <div className='text-white underline underline-offset-2'>
          {num} Orders {">"}
        </div>
      </div>


      <div className='bg-[#0e4f83] w-100 h-16 rounded-md flex justify-between items-center px-3'>
        <div className='text-gray-200 text-[18px]'>
          {due}
        </div>
        <div className='text-gray-200 text-[18px]'>
          {date}
        </div>
      </div>
    </div>
  )
}

export default Payout