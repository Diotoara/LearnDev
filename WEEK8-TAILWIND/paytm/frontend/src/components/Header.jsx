import React from 'react'

const Header = () => {
  return (
    <>
    <div className="font-bold text-3xl flex justify-center items-center">
            Payments App
    </div>
    <div className='flex justify-center items-center'>
        <div className='text-xl pr-2'>
            Hello, User
        </div>
        <div>
            <img className='cursor-pointer w-15 h-15 rounded-full' src="https://img.pikbest.com/png-images/20241022/stealth-masked-hacker-gaming-logo-for-gamers_10991543.png!bw700" alt="" />
        </div>
    </div>
    </>
  )
}

export default Header