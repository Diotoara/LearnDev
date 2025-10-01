import React from 'react'

const OrderBar = () => {
  return (
    <div className='bg-gray-200 w-310 px-2 h-10 flex justify-between items-center '>

        <div className='text-gray-600 font-medium'>
            Order ID
        </div>

        <div className='text-gray-600 font-medium'>
            Status
        </div>

        <div className='text-gray-600 font-medium'>
            Transaction ID
        </div>

        <div className='text-gray-600 font-medium'>
            Refund Date
        </div>

        <div className='text-gray-600 font-medium'>
            Order Date
        </div>

    </div>
  )
}

export default OrderBar