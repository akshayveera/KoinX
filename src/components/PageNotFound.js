
import React from 'react'
import {Link} from "react-router-dom"

const PageNotFound = () => {
  return (    
    <div className='w-full h-[100vh] flex flex-col gap-4 items-center pt-40'>
        <div className='text-4xl font-bold bg-gradient-to-r p-2 from-blue-600 to-blue-800 bg-clip-text text-transparent'>Page Not Found</div>
        <Link to='/'>
            <div className='underline font-semibold cursor-pointer' >Go to Home Page</div>
        </Link>
    </div>
  )
}

export default PageNotFound