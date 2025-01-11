
import React from 'react'

import { UsformatCommas, IndformatCommas } from '../../utils/Currency'
import { PriceChange } from '../../utils/PriceChange'


const CryptoRow = ({data}) => {

    const {
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
    <div className={'flex items-center h-16 ' + (market_cap_rank===250 ? "" :'border-b-2')}>

        <div className='flex items-center text-sm gap-3 xl:w-[20%] sm:w-[30%]  w-[60%] pl-7'>
            <div className='text-gray-500'>{market_cap_rank }</div>
            <img className='h-7 w-7 object-contain' src={image} alt="crypto icon" />
            <div className='flex flex-col '>
                <p className='font-semibold'>{name}</p>
                <p className='text-gray-500 relative bottom-1'>{symbol.toUpperCase()}</p>
            </div>
        </div>

        <div className='xl:w-[12%] sm:w-[17%] w-[40%] sm:pr-0 pr-7 text-right font-semibold text-[#444] '>{"$" + current_price}</div>

        <div className='sm:flex items-center gap-2 xl:w-[8%] sm:w-[17%]  hidden  justify-end'><PriceChange price={price_change_percentage_1h_in_currency} /></div>

        <div className='sm:flex items-center gap-2 xl:w-[8%] sm:w-[17%] hidden justify-end'><PriceChange price={price_change_percentage_24h_in_currency} /></div>

        <div className='sm:flex items-center gap-2 xl:w-[8%] sm:w-[17%] hidden justify-end'><PriceChange price={price_change_percentage_7d_in_currency} /></div>

        <div className='xl:w-[22%] xl:block hidden text-right font-semibold text-[#444]'>{"$"+UsformatCommas(market_cap)+".00"}</div>

        <div className='xl:w-[22%] xl:block hidden text-right font-semibold text-[#444] pr-7'>{IndformatCommas(circulating_supply)+" "+symbol.toUpperCase()}</div>        

    </div>
  )
}

export default CryptoRow