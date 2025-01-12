
import React from 'react'
import { Link } from 'react-router-dom';
import { koinxLogoURL } from './utils/Constants';

const Header = () => {

    const headerList = ["Crypto Taxes", "Free Tools", "Resource Center"];

    return (
        <header className='flex justify-between items-center shadow-lg px-5 sm:px-10 xl:px-12  py-4 '>
            <div className='flex'>
                <Link to="/" className='outline-none'>
                    <img className='w-20 sm:w-28 outline-none' src={koinxLogoURL} alt="KoinX logo" />
                </Link>
            </div>

            <div className='flex lg:gap-10 md:gap-5'>

                <ul className='list-none lg:gap-10 md:gap-5 md:flex hidden items-center'>
                    {
                        headerList.map((item)=>{
                            return <li key={item} className='font-semibold'>{item}</li>
                        })
                    }

                </ul>

                <button className='bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-1 sm:py-2 px-5 sm:px-7 rounded-lg'>Get Started</button>
            </div>
        </header>
    )
}

export default Header;