
import React from 'react'

const TableHeader = () => {
  return (
    <div className={'flex font-semibold h-16 items-center border-b-2'}>
        <div className='xl:w-[20%] sm:w-[30%] w-[60%] pl-7'># NAME</div>
        <div className='xl:w-[12%] sm:w-[17%] w-[40%] sm:pr-0 pr-7 text-right'>PRICE</div>
        <div className='xl:w-[8%] sm:w-[17%] sm:block hidden text-right'>1H</div>
        <div className='xl:w-[8%] sm:w-[17%] sm:block hidden text-right'>24H</div>
        <div className='xl:w-[8%] sm:w-[17%] sm:block hidden sm:pr-7 text-right'>7D</div>
        <div className='xl:w-[22%] xl:block hidden text-right'>MARKET CAP</div>
        <div className='xl:w-[22%] xl:block hidden text-right pr-7'>CALCULATING SUPPLY</div>
    </div>
  )
}

export default TableHeader