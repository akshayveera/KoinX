
import React from 'react'
import TableHeader from './TableHeader';

const HomePageShimmer = () => {

    const array = Array(15).fill(0);

    return (
        <section>
            {
                array?.map((item, index) => {
                    return (<div className={'flex items-center h-16 border-b-2 gap-5 pr-4'} key={index}> 

                        <div className='flex items-center text-sm gap-2 xl:w-[20%] sm:w-[30%]  w-[60%] pl-7'>
                            <p className='font-semibold bg-gray-100 w-6 h-6'></p>
                            <div className='h-7 w-7 rounded-full object-contain bg-gray-100'></div>
                            <p className='font-semibold bg-gray-100 w-28 h-6'></p>
                        </div>

                        <div className='xl:w-[12%] sm:w-[17%] w-[40%] sm:pr-0 pr-7 text-right font-semibold text-[#444] h-6 bg-gray-100'></div>

                        <div className='sm:flex items-center gap-2 xl:w-[8%] sm:w-[17%]  hidden  justify-end h-6 bg-gray-100'></div>

                        <div className='sm:flex items-center gap-2 xl:w-[8%] sm:w-[17%] hidden justify-end h-6 bg-gray-100'></div>

                        <div className='sm:flex items-center gap-2 xl:w-[8%] sm:w-[17%] hidden sm:pr-7 justify-end h-6 bg-gray-100'></div>

                        <div className='xl:w-[22%] xl:block hidden text-right font-semibold text-[#444] h-6 bg-gray-100'></div>

                        <div className='xl:w-[22%] xl:block hidden text-right font-semibold text-[#444] pr-7 h-6 bg-gray-100'></div> 

                    </div>)
                })
            }            
        </section>
    )
}

export default HomePageShimmer