
import React from 'react'
import { PriceChange } from '../../../utils/PriceChange';
import { IndformatCommas, UsformatCommas } from '../../../utils/Currency';
import TradingViewWidget from "../../../utils/PriceChart"
import CoinDetailsShimmer from './CoinDetailsShimmer';

const CoinDetailsChart = ({coinData, extraCoinData}) => {

    if(coinData == null || extraCoinData == null || Object.keys(extraCoinData).length == 0){
        return <CoinDetailsShimmer />
    }

    const {        
        usd,
        usd_24h_change,
        inr
    } = coinData;

    const {
        image,
        name,
        symbol,
        market_cap_rank,  
    } = extraCoinData;

    const intervalArr = ["1H", "24H", "7D", "1M", "3M", "6M", "1Y", "ALL"]

    

  return (
    <div className='bg-white p-5 md:p-7 rounded-lg flex flex-col gap-6 w-full'>
        <div className='flex gap-5 items-center flex-wrap'>
            <div className='flex gap-2'>
                <img className='h-7 md:h-10 ' src={image} alt="logo of coin" />
                <p className='text-xl md:text-2xl font-semibold'>{name}</p>
                <p className='text-gray-500 font-semibold'>{(symbol && symbol.toUpperCase())}</p>
            </div>
            <p className='bg-gray-500 text-white py-1 px-3 lg:py-1.5 lg:px-4 rounded-lg'>{"Rank #" + market_cap_rank}</p>
        </div>

        <div className='flex flex-col gap-1 border-b pb-10'>
            <div className='flex md:items-center'>
                <p className='text-2xl md:text-3xl font-semibold'>{(usd && "$"+UsformatCommas(usd)) }</p>
                <div className={'flex items-center gap-2 px-3 py-1 rounded-md ml-3 md:ml-10 mr-3 justify-left ' + ( usd_24h_change>=0 ? "bg-green-100" : "bg-red-100")}>
                    <PriceChange price={usd_24h_change}/>
                </div>
                <p className='text-gray-500 font-semibold'>(24 H)</p>
            </div>

            <div className='md:text-lg font-semibold text-[#444]'>{ (inr && "₹ "+IndformatCommas(inr)) }</div>
        </div>

        <div>

            <div className='flex justify-between'>
                <p className='text-xl font-semibold'>{name} Price Chart (USD)</p>
                <div className='md:flex hidden gap-5 font-semibold text-gray-500 mb-5'>
                    {intervalArr.map((item)=>{
                        return <button key={item}>{item}</button>
                    })}
                </div>
            </div>

            <TradingViewWidget/>

        </div>

    </div>
  )
}

export default CoinDetailsChart