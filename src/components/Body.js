
import React from 'react'
import AppPath from './AppPath'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <section 
      className='
        bg-slate-200 pb-10 px-5
        2xl:px-16
        xl:px-10'>
          <AppPath/>
          <Outlet/>
    </section>
  )
}

export default Body