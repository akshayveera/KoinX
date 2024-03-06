
import React from 'react'
import arrowUp from "../assets/arrow-up.png"
import arrowDown from "../assets/arrow-down.png"
import { UsformatCommas, IndformatCommas } from './utils/Currency'

const PriceChange = ({price})=>{

    if(price>=0)
    {
        return (
            <>
                <img className='h-3.5' src={arrowUp} alt="arrow up" />
                <p className='font-semibold text-md text-[#0fba83]'>{String(price).slice(0,4) + "%"}</p>
            </>
        )
    }
    else{
        return (
            <>
                <img className='h-3.5' src={arrowDown} alt="arrow down" />
                <p className='font-semibold text-md text-[#f7324c]'>{String(price).slice(0,5) + "%"}</p>
            </>
        )
    }
}

const CryptoRow = ({data, number}) => {

    const {id, symbol, name, image, current_price,price_change_percentage_1h_in_currency, price_change_percentage_24h_in_currency,price_change_percentage_7d_in_currency,market_cap, circulating_supply } = data;


  return (
    <div className={'flex items-center h-16 ' + (number==250 ? "" :'border-b-2')}>

        <div className='flex items-center gap-3 w-[20%] pl-7'>
            <div className='text-gray-500'>{number}</div>
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