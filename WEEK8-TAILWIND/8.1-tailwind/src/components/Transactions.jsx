import React from 'react'

const Transactions = ({payouts, refunds}) => {
  return (
    <>
    <div className='text-[25px] font-normal'>
        Transactions | This Month
    </div>

    <div className='flex pt-4' >
      
    <div className='pl-3 pr-5'>
      <button className=' bg-gray-200 py-1 text-[17px] text-gray-600 px-4 rounded-2xl'>
        Payouts({payouts})
      </button>
    </div>

    <div>
      <button className=' bg-blue-400 py-1 text-[17px] text-white px-4 rounded-2xl'>
        Refunds({refunds})
      </button>
    </div>

    </div>
    </>
  )
}

export default Transactions