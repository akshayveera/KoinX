
import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {

    const headerList = ["Crypto Taxes", "Free Tools", "Resource Center"];

  return (
    <header className='flex justify-between items-center shadow-md xl:px-16 px-10 py-3 '>
        <div className='flex'>
            <Link to="/">
                <img className='h-16' src="https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg" alt="KoinX logo" />
            </Link>
            <p className='text-[0.6rem] font-bold relative top-4'>TM</p>
        </div>

        <div className='flex lg:gap-10 md:gap-5'>

            <ul className='list-none lg:gap-10 md:gap-5 md:flex hidden items-center'>
                {
                    headerList.map((item)=>{
                        return <li key={item} className='font-semibold text-lg'>{item}</li>
                    })
                }

            </ul>

            <button className='bg-[#0052fe] text-white font-semibold py-2 px-7 text-lg rounded-lg'>Get Started</button>
        </div>
    </header>
  )
}

export default Header;