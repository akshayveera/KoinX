

import React from 'react'

const CoinDetailsHeader = () => {

    const headerArr = ["Overview", "Fundamentals", "News Insights", "Sentiments", "Team", "Technicals", "Tokenomics"]

  return (
    <div className='md:flex hidden justify-between border-b-2 border-gray-300 py-2 text-gray-700 '>
        {
            headerArr.map((item)=>{
                return <span key={item} className='font-semibold text-lg'>{item}</span>
            })
        }
    </div>
  )
}

export default CoinDetailsHeader