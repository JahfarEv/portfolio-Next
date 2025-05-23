import React from 'react'

interface Props{
skill1:string
skill2:string
skill3:string
level1:string
level2:string
level3:string
}

const SkilsLanguage = ({skill1,skill2,skill3,level1,level2,level3}:Props) => {
  return (
    <div className='w-[300px] lg:w-[550px]'>  
  <div className="relative mb-[3rem] ">
    <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
      {skill1}
    </h1>
    <span className={`${level1} h-[6px] absolute bottom-0 left-0 bg-teal-400`}></span>
  </div>
  <div className="relative mb-[3rem]">
    <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
      {skill2}
    </h1>
    <span className={`${level2} h-[6px] absolute bottom-0 left-0 bg-teal-400`}></span>
  </div>
  <div className="relative mb-[3rem]">
    <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
      {skill3}
    </h1>
    <span className={`${level3} h-[6px] absolute bottom-0 left-0 bg-teal-400`}></span>
  </div>
  {/* <div className="relative mb-[3rem]">
    <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
      {skill4}
    </h1>
    <span className={`${level4} h-[6px] absolute bottom-0 left-0 bg-teal-400`}></span>
  </div> */}
</div>

  )
}

export default SkilsLanguage
