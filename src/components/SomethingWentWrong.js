
import React from 'react'

const SomethingWentWrong = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col gap-4 items-center pt-40'>
        <div className='text-4xl font-bold bg-gradient-to-r p-2 from-blue-600 to-blue-800 bg-clip-text text-transparent'>Something Went Wrong</div>
        <div className='font-semibold cursor-pointer' >Please try after some time</div>
    </div>
  )
}

export default SomethingWentWrong