
import React from 'react'

import { UsformatCommas, IndformatCommas } from './utils/currency'
import { PriceChange } from './utils/PriceChange'


const CryptoRow = ({data}) => {

    const {
        id,
        symbol, 
        name, 
        image, 
        current_price,
        price_change_percentage_1h_in_currency, 
        price_change_percentage_24h_in_currency,
        price_change_percentage_7d_in_currency,
        market_cap, 
        circulating_supply, 
        market_cap_rank 
    } = data;


  return (
    <div className={'flex items-center h-16 ' + (market_cap_rank==250 ? "" :'border-b-2')}>

        <div className='flex items-center gap-3 w-[20%] pl-7'>
            <div className='text-gray-500'>{market_cap_rank }</div>
            <img className='h-7' src={image} alt="crypto icon" />
            <div className='flex flex-col '>
                <p className='font-semibold'>{name}</p>
                <p className='text-gray-500 relative bottom-1'>{symbol.toUpperCase()}</p>
            </div>
        </div>

        <div className='text-lg w-[12%] text-right font-semibold text-[#444]'>{"$" + current_price}</div>

        <div className='flex items-center gap-2 w-[8%] justify-end'><PriceChange price={price_change_percentage_1h_in_currency} /></div>

        <div className='flex items-center gap-2 w-[8%] justify-end'><PriceChange price={price_change_percentage_24h_in_currency} /></div>

        <div className='flex items-center gap-2 w-[8%] justify-end'><PriceChange price={price_change_percentage_7d_in_currency} /></div>

        <div className='text-lg w-[22%] text-right font-semibold text-[#444]'>{"$"+UsformatCommas(market_cap)+".00"}</div>

        <div className='text-lg w-[22%] text-right font-semibold text-[#444] pr-7'>{IndformatCommas(circulating_supply)+" "+symbol.toUpperCase()}</div>        

    </div>
  )
}

export default CryptoRow