import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className=' px-9 h-17 flex items-center justify-between'>
    <div className='flex items-center w-70'>
        <div className='text-[24px] font-medium'>
            Payouts
        </div>
        <div className='pl-4 flex  text-[14px] text-gray-500'>
            <img className='w-3 h-3 mt-[4px] mr-1' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/2048px-Icon-round-Question_mark.svg.png" alt="" />
            How it works
        </div>
    </div>

    <div className='w-70'>
        <input className=' border border-gray-400 py-2 pl-10  w-70 rounded-sm overflow-visible' type="text" placeholder='Order ID or transaction ID' />
        <span>
            <img className='w-5 h-5 absolute left-68.5 top-106.5 transform -translate-y-1/2 ' src="https://img.icons8.com/?size=100&id=132&format=png&color=000000" alt="" />
        </span>
    </div>

    <div className='flex'>
        <div>
            hi
        </div>
        <div>
            low arrow
        </div>
    </div>

    </div>
    <hr/>
    </>
  )
}

export default Navbar