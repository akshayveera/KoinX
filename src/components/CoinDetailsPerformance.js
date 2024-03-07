

import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { UsformatCommas } from './utils/currency';

const CoinDetailsPerformance = () => {

    const coinDetailsRedux = useSelector(store=>store.app.coinDetails);

    const {
        name,
        current_price,
        high_24h,
        low_24h,
        total_volume,
        market_cap_rank,
        market_cap,        
        max_supply,
        ath,
        ath_change_percentage,
        atl,
        atl_change_percentage,
    } = coinDetailsRedux

    const vol_by_cap = String(total_volume / market_cap).slice(0,6);

    const fundamentalsLeft = [ name+" Price", "24 Low / 24h High", "7d Low / 7d High", "Trading Volume", "Market Cap Rank"];
    const fundamentalsRight = ["Market Cap", "Maximum Supply", "Volume / Market Cap", "All-Time High", "All-Time-Low"];

    const fundamentalValuesLeft = [ current_price && "$"+UsformatCommas(current_price) , high_24h && low_24h && "$"+UsformatCommas(high_24h)+" / "+"$"+UsformatCommas(low_24h), high_24h && low_24h && "$"+UsformatCommas(high_24h)+" / "+"$"+UsformatCommas(low_24h), total_volume && "$"+UsformatCommas(total_volume), market_cap_rank && "#"+market_cap_rank];
    const fundamentalValuesRight = [ market_cap && "$"+UsformatCommas(market_cap) , "$21,000", vol_by_cap , ath && "$"+UsformatCommas(ath) , atl && "$"+UsformatCommas(atl)];
    
    

  return (
    <div className='p-7 flex flex-col gap-10 bg-white rounded-xl'>
        
        <h1 className='text-3xl font-semibold'>Performance</h1>

        <div className='flex justify-between items-center'>
            
            <div className='flex flex-col items-center'>
                <p className='text-gray-500 font-semibold text-lg'>Today's Low</p>
                <p className='text-gray-600 font-semibold text-lg'>{low_24h && "$"+UsformatCommas(low_24h)}</p>
            </div>

            <div className=' md:w-[65%] w-[30%] h-1.5 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500'>

            </div>

            <div className='flex flex-col items-center'>
                <p className='text-gray-500 font-semibold text-lg'>Today's High</p>
                <p className='text-gray-600 font-semibold text-lg'>{high_24h && "$"+UsformatCommas(high_24h)}</p>
            </div>
            
        </div>

        <div className='flex justify-between items-center'>
            
            <div className='flex flex-col items-center'>
                <p className='text-gray-500 font-semibold text-lg'>Today's Low</p>
                <p className='text-gray-600 font-semibold text-lg'>{low_24h && "$"+UsformatCommas(low_24h)}</p>
            </div>

            <div className=' md:w-[65%] w-[30%] h-1.5 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500'>

            </div>

            <div className='flex flex-col items-center'>
                <p className='text-gray-500 font-semibold'>Today's High</p>
                <p className='text-gray-600 font-semibold'>{high_24h && "$"+UsformatCommas(high_24h)}</p>
            </div>

        </div>

        <h1 className='text-2xl font-semibold text-gray-700 flex items-center gap-2'>Fundamentals <p className='bg-gray-400 text-white h-5 w-5 flex items-center justify-center rounded-full text-sm'>i</p></h1>

        <div className='lg:flex-row flex flex-col  justify-between'>

            <div className='lg:w-[45%] w-[95%] flex flex-col md:text-lg'>
                {
                    fundamentalsLeft.map((item, idx)=>{
                        return (<div key={idx} className='flex justify-between py-3 border-b'>
                            <p className='text-gray-500 font-semibold'>{item}</p>
                            <p className='text-gray-600 font-semibold'>{fundamentalValuesLeft[idx]}</p>
                        </div>)
                    })
                }  
            </div>
            
            <div className='lg:w-[45%] w-[95%] flex flex-col md:text-lg'>
                {
                    fundamentalsRight.map((item, idx)=>{
                        return (<div key={idx} className='flex justify-between py-3 border-b'>
                            <p className='text-gray-500 font-semibold'>{item}</p>
                            <p className='text-gray-600 font-semibold'>{fundamentalValuesRight[idx]}</p>
                        </div>)
                    })
                }  
            </div>

        </div>

    </div>
  )
}

export default CoinDetailsPerformance