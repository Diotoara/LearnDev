import React from 'react'

const RevenueCard = ({head, amount, num}) => {
  return (
    <div className=' shadow-lg w-90 h-25 rounded-md flex flex-col justify-center px-3'>

        <div className='text-[16px]'>
            {head}
        </div>
        <div className='flex justify-between items-center   pt-4'>
            <div className='font-medium text-3xl '>
                {amount}
            </div>
            <div className='text-blue-700 underline underline-offset-2'>
                {num}
            </div>
        </div>
        
        
    </div>
  )
}

export default RevenueCard