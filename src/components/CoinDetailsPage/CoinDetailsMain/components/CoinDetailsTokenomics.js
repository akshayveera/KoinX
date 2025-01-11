
import React from 'react'
import pieChart from "../../../../assets/piechart.png"

const CoinDetailsTokenomics = () => {
  return (
    <div className='bg-white p-7 rounded-lg flex flex-col gap-5'>
        
        <h1 className='text-3xl font-semibold'>Tokenomics</h1>

        <h2 className='text-2xl font-semibold'>Initial Distrubution</h2>

        <div className='flex md:gap-10 gap-4 flex-wrap'>

            <img className='md:h-44 h-32' src={pieChart} alt="pie chart" />

            <div className='flex flex-col justify-center gap-3'>

                <div className='flex items-center gap-2'>
                    <div className='h-3 w-3 bg-purple-600 rounded-full'></div>
                    <p className='text-lg'>Crowdsale investor: 80%</p>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='h-3 w-3 bg-yellow-400 rounded-full'></div>
                    <p className='text-lg'>Foundation: 20%</p>
                </div>               

            </div>
        </div>

        <p className='font-semibold text-gray-700 pb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit at, tenetur commodi deleniti aut eos vitae minima, corrupti modi in sed repudiandae quae? Unde tenetur dicta atque veniam, similique vitae maiores beatae reprehenderit eaque fuga in doloribus neque odio ratione? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, cum!</p>

    </div>
  )
}

export default CoinDetailsTokenomics