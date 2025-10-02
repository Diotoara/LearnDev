import React from 'react'

const User = ( {img, name} ) => {
  return (
    <div className='flex justify-between items-center'>

    <div className='flex items-center'>
    <div>
      <img className=' border  h-16 w-16 rounded-full' src={img} alt="" />
    </div>
    <div className='text-2xl font-bold pl-2'>
      {name}
    </div>
    </div>

    <div>
      <button className='bg-[#FFCAD4] p-2 rounded-md cursor-pointer'>Send Money</button>
    </div>
    
    </div>
  )
}

export default User