import React from 'react'

const Overview = () => {
  return (
    <>
    <div className='flex justify-between'>
    <div className='text-[22px] font-medium'>
      Overview
    </div>

    <div>
      <button className='border border-gray-600  p-1 px-3 rounded-sm flex justify-center items-center '>
        This Month
        <img className='w-3 h-3 ml-1 mt-1' src="https://cdn-icons-png.flaticon.com/512/54/54785.png" alt="" />
      </button>
    </div>
    </div>
    </>
  )
}

export default Overview