import { div } from 'motion/react-client'
import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex justify-between'>

    
    <div>
        <input className=' border border-gray-400 py-2 pl-10  w-70 rounded-sm overflow-visible' type="text" placeholder='Order ID or transaction ID' />
        <span>
            <img className='w-5 h-5 absolute left-68.5 top-106.5 transform -translate-y-1/2 ' src="https://img.icons8.com/?size=100&id=132&format=png&color=000000" alt="" />
        </span>
    </div>

    <div className='flex '>

      <div className='border border-gray-500 flex items-center rounded-md px-5 mr-2'>
        <button className='text-[18px] flex items-center'>
          Sort
          <img className='w-4 h-4 ml-2' src="https://img.icons8.com/?size=100&id=21886&format=png&color=000000" alt="" />
        </button>
      </div>

      <div className='border border-gray-500 flex items-center rounded-md px-2'>
        <button>
          <img className='w-5 h-5' src="https://img.icons8.com/?size=100&id=20FjgTazh8FG&format=png&color=000000" alt="" />
        </button>
      </div>

    </div>

    </div>
  )
}

export default SearchBar