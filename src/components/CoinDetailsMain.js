
import React, { useEffect, useState } from 'react'
import CoinDetailsChart from './CoinDetailsChart'
import CoinDetailsHeader from './CoinDetailsHeader'
import CoinDetailsPerformance from './CoinDetailsPerformance'
import CoinDetailsSentiment from './CoinDetailsSentiment'
import AboutCoin from './AboutCoin'
import CoinDetailsTokenomics from './CoinDetailsTokenomics'
import Team from './Team'
import { useParams } from 'react-router-dom'
import { coinDetailsURL } from './utils/Constants'
import CoinDetailsSpikes from './CoinDetailsSpikes'

const CoinDetailsMain = () => {

  const [coinData, setCoinData] = useState(null);
  
  const params = useParams();

  useEffect((params)=>{
    getCoinData(params.cryptoId)
  }, [])

  async function getCoinData(id){

    const data = await fetch(coinDetailsURL+id);
    const json = await data.json();

    setCoinData(json[id]);
  }  

  if(coinData === null)
  {
    return <div>loading...</div>
  }

  return (
    <div className='xl:w-[68%] w-full flex flex-col gap-5'>
        <CoinDetailsChart coinData={coinData}/>
        <CoinDetailsHeader/>
        <CoinDetailsPerformance/>
        <CoinDetailsSentiment/>
        <AboutCoin/>
        <CoinDetailsTokenomics/>
        <Team/>
        <CoinDetailsSpikes/>
    </div>
  )
}

export default CoinDetailsMain