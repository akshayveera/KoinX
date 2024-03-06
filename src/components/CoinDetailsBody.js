
import React, { useEffect, useState } from 'react'
import { PriceChange } from './utils/PriceChange';
import { IndformatCommas, UsformatCommas } from './utils/currency';
import TradingViewWidget from "./utils/PriceChart"

const CoinDetailsBody = () => {

    const [coinData, setCoinData] = useState(
        {
            "id": "bitcoin",
            "symbol": "btc",
            "name": "Bitcoin",
            "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
            "current_price": 63459.27,
            "market_cap": 1246709338178,
            "market_cap_rank": 1,
            "fully_diluted_valuation": 1332630702737,
            "total_volume": 103214725721,
            "high_24h": 68913,
            "low_24h": 60861,
            "price_change_24h": -4546.221765229835,
            "price_change_percentage_24h": -6.68508,
            "market_cap_change_24h": -88720221688.13306,
            "market_cap_change_percentage_24h": -6.64357,
            "circulating_supply": 19646025.0,
            "total_supply": 21000000.0,
            "max_supply": 21000000.0,
            "ath": 69045,
            "ath_change_percentage": -7.88019,
            "ath_date": "2021-11-10T14:24:11.849Z",
            "atl": 67.81,
            "atl_change_percentage": 93698.62184,
            "atl_date": "2013-07-06T00:00:00.000Z",
            "roi": null,
            "last_updated": "2024-03-06T04:31:29.968Z",
            "price_change_percentage_1h_in_currency": 0.1880994475296846,
            "price_change_percentage_24h_in_currency": -6.685080791590132,
            "price_change_percentage_7d_in_currency": 11.413829667402151,
            "usd": 66157,
            "usd_market_cap": 1294712422618.514,
            "usd_24h_vol": 106072599175.99141,
            "usd_24h_change": -1.6159391922118689,
            "inr": 5484335,
            "inr_market_cap": 107333882856304.36,
            "inr_24h_vol": 8793346236249.649,
            "inr_24h_change": -1.6474205810384022,
            "last_updated_at": 1709709579
        }
    );

    const {
        image,
        name,
        symbol,
        market_cap_rank,
        usd,
        usd_24h_change,
        inr
    } = coinData;

    const intervalArr = ["1H", "24H", "7D", "1M", "3M", "6M", "1Y", "ALL"]

  return (
    <div className='bg-white p-7 rounded-lg flex flex-col gap-10 w-[65%]'>
        <div className='flex gap-3 items-center'>
            <img className='h-10' src={image} alt="" />
            <p className='text-3xl font-semibold'>{name}</p>
            <p className='text-gray-500 font-semibold'>{symbol.toUpperCase()}</p>
            <p className='bg-gray-500 text-white text-lg py-1.5 px-4 rounded-lg ml-3'>{"Rank #" + market_cap_rank}</p>
        </div>

        <div className='flex flex-col gap-1 border-b pb-10'>
            <div className='flex items-center'>
                <p className='text-4xl font-semibold'>{"$"+UsformatCommas(usd) }</p>
                <div className={'flex items-center gap-2 px-3 py-1 rounded-md ml-10 mr-3 ' + ( usd_24h_change>=0 ? "bg-green-100" : "bg-red-100")}>
                    <PriceChange price={usd_24h_change}/>
                </div>
                <p className='text-gray-500 font-semibold'>(24 H)</p>
            </div>

            <div className='text-lg font-semibold text-[#444]'>{"₹ "+IndformatCommas(inr) }</div>
        </div>

        <div>
            <div className='flex justify-between'>
                <p className='text-lg font-semibold'>{name} Price Chart (USD)</p>
                <div className='flex gap-5 font-semibold text-gray-500 mb-5'>
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

export default CoinDetailsBody