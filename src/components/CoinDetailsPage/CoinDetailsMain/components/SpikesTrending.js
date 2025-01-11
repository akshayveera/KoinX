
import React from 'react'
import { PriceChange } from '../../../utils/PriceChange'


const SpikesTrending = ({info}) => {


    const {
        small,
        symbol,
        data
    } = info

  return (
    <div className='flex flex-col gap-2 border w-64 h-40 py-3 px-8 rounded-lg items-start overflow-hidden '>
        <div className='flex gap-2 items-center'>
            <img className='h-7 rounded-full' src={small} alt="crypto icon" />
            <p className='font-semibold text-gray-500'>{symbol && symbol.toUpperCase()}</p>
            <div className={'flex gap-1.5 items-center '}>
                <PriceChange price={data.price_change_percentage_24h.usd}/>
            </div>
        </div>

        <p className='text-xl font-semibold whitespace-nowrap overflow-hidden'>{data.price && data.price}</p>

        <img src={data.sparkline} alt="sparkline" />
    </div>
  )
}

export default SpikesTrending