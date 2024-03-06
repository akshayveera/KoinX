
import React from 'react'
import AppPath from './AppPath'
import Cryptocurrencies from './Cryptocurrencies'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <section className='bg-slate-200 px-16 pb-10'>
        <AppPath/>
        <Outlet/>
    </section>
  )
}

export default Body