import React from 'react'

const UserSearch = () => {
  return (
    <>
    <div className='text-2xl font-bold'>
        Users
    </div>
    <div className='pt-4'>
        <input className=' w-full py-3 pl-3 border border-[#2D322F] rounded-md' type="text" placeholder='Search Users..' />
    </div>
    </>
  )
}

export default UserSearch