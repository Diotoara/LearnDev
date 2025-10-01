import React from 'react'

const Orders = ({oid, status, tid, rDate, oDate}) => {
  return (
    <div className='flex justify-between items-center pr-5 pl-2 pt-4 '>
        <div className=' w-30 text-[15px] text-blue-600 font-medium'>
            {oid}
        </div>
        <div className='text-[15px] w-35'>
            {status}
        </div>
        <div className='text-[15px] w-35'>
            {tid}
        </div>
        <div className='text-[15px] w-35'>
            {rDate}
        </div>
        <div className=' pl-20 text-[15px] w-35'>
            {oDate}
        </div>
    </div>
  )
}

export default Orders