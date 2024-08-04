import { MapIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-[8rem] pb-[4rem] bg-[#02050a] '>
        <div className='grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]'>
          <div className='flex items-center space-x-6'>
            <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
              <MapIcon className='md:w-[4rem] md-[4rem] w-[3.5rem] h-[3.5rem] text-black'/>
            </div>
            <div>
              <h1 className='text-[25px] mb-[0.2rem] font-semibold text-[white]'>Address</h1>
              <p></p>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      
    </div>
  )
}

export default Footer
