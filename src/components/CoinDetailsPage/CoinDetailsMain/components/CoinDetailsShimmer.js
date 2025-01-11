import React from 'react'
import TradingViewWidget from "../../../utils/PriceChart"

const CoinDetailsShimmer = () => {
  return (
    <div className='bg-white p-7 rounded-lg flex flex-col gap-5 w-full'>
        <div className='flex gap-3 items-center'>
            <div className='w-10 h-10 rounded-full bg-gray-200'></div>
            <p className='text-3xl font-semibold w-32 h-9 bg-gray-200 rounded-lg'></p>
            <p className='bg-gray-200 text-white text-lg py-1.5 px-4 rounded-lg ml-3 w-20 h-9'></p>
        </div>

        <div className='flex flex-col gap-1 border-b pb-10 w-64 h-20 bg-gray-200 rounded-lg'>
        </div>

        <div>
            <TradingViewWidget/>
        </div>

    </div>
  )
}

export default CoinDetailsShimmer