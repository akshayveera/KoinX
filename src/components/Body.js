
import React from 'react'
import AppPath from './AppPath'
import Cryptocurrencies from './Cryptocurrencies'

const Body = () => {
  return (
    <section className='bg-slate-100 px-16 pb-10'>
        <AppPath/>
        <Cryptocurrencies/>
    </section>
  )
}

export default Body