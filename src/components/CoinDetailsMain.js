
import React from 'react'
import CoinDetailsChart from './CoinDetailsChart'
import CoinDetailsHeader from './CoinDetailsHeader'
import CoinDetailsPerformance from './CoinDetailsPerformance'
import CoinDetailsSentiment from './CoinDetailsSentiment'
import AboutCoin from './AboutCoin'
import CoinDetailsTokenomics from './CoinDetailsTokenomics'
import Team from './Team'

const CoinDetailsMain = () => {
  return (
    <div className='w-[68%] flex flex-col gap-5'>
        <CoinDetailsChart/>
        <CoinDetailsHeader/>
        <CoinDetailsPerformance/>
        <CoinDetailsSentiment/>
        <AboutCoin/>
        <CoinDetailsTokenomics/>
        <Team/>
    </div>
  )
}

export default CoinDetailsMain