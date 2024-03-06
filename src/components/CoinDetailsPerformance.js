

import React from 'react'

const CoinDetailsPerformance = () => {

    const fundamentalsLeft = ["Bitcoin Price", "24 Low / 24h High", "7d Low / 7d High", "Trading Volume", "Market Cap Rank"];
    const fundamentalsRight = ["Market Cap", "Market Cap Dominance", "Volume / Market Cap", "All-Time High", "All-Time-Low"];

  return (
    <div className='p-7 flex flex-col gap-10 bg-white rounded-xl'>
        
        <h1 className='text-3xl font-semibold'>Performance</h1>

        <div className='flex justify-between items-center'>
            
            <div className='flex flex-col items-center'>
                <p>Today's Low</p>
                <p>Value</p>
            </div>

            <div className=' w-[70%] h-1.5 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500'>

            </div>

            <div className='flex flex-col items-center'>
                <p>Today's High</p>
                <p>Value</p>
            </div>
            
        </div>

        <div className='flex justify-between items-center'>
            
            <div className='flex flex-col items-center'>
                <p>Today's Low</p>
                <p>Value</p>
            </div>

            <div className=' w-[70%] h-1.5 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500'>

            </div>

            <div className='flex flex-col items-center'>
                <p>Today's High</p>
                <p>Value</p>
            </div>

        </div>

        <h1 className='text-2xl font-semibold text-gray-700 flex items-center gap-2'>Fundamentals <p className='bg-gray-400 text-white h-5 w-5 flex items-center justify-center rounded-full text-sm'>i</p></h1>

        <div className='flex justify-between'>

            <div className='w-[45%] flex flex-col text-lg'>
                {
                    fundamentalsLeft.map((item)=>{
                        return (<div className='flex justify-between py-3 border-b'>
                            <p className='text-gray-500'>{item}</p>
                            <p>Value</p>
                        </div>)
                    })
                }  
            </div>
            
            <div className='w-[45%] flex flex-col text-lg'>
                {
                    fundamentalsRight.map((item)=>{
                        return (<div className='flex justify-between py-3 border-b'>
                            <p className='text-gray-500'>{item}</p>
                            <p>Value</p>
                        </div>)
                    })
                }  
            </div>

        </div>

    </div>
  )
}

export default CoinDetailsPerformance