
import React, { useEffect, useState } from 'react'
import CoinDetailsChart from './components/CoinDetailsChart'
import CoinDetailsHeader from './components/CoinDetailsHeader'
import CoinDetailsPerformance from './components/CoinDetailsPerformance'
import CoinDetailsSentiment from './components/CoinDetailsSentiment'
import AboutCoin from './components/AboutCoin'
import CoinDetailsTokenomics from './components/CoinDetailsTokenomics'
import Team from './components/Team'
import { useParams } from 'react-router-dom'
import { coinDetailsURL, coinsMarketURL } from '../../utils/Constants'
import CoinDetailsSpikes from './components/CoinDetailsSpikes'
import { useSelector } from 'react-redux'

const CoinDetailsMain = () => {

  const [coinData, setCoinData] = useState(null);
  const [extraCoinData, setextraCoinData] = useState(useSelector(store=>store.app.coinDetails));
  
  const params = useParams();

  useEffect(()=>{
    getCoinData(params.cryptoId);

    if(extraCoinData == null || Object.keys(extraCoinData).length == 0) {
      getExtraCoinsData();
    }
  }, [params.cryptoId])

  async function getCoinData(id){

    const data = await fetch(coinDetailsURL+id);
    const json = await data.json();

    setCoinData(json[id]);
  }  

  async function getExtraCoinsData() {

    const data = await fetch(coinsMarketURL + `&ids=${params.cryptoId}`);
    const json = await data.json();

    setextraCoinData(json[0]);
  }

  return (
    <div className='xl:w-[68%] w-full flex flex-col gap-5'>
        <CoinDetailsChart coinData={coinData} extraCoinData={extraCoinData}/>
        <CoinDetailsHeader/>
        <CoinDetailsPerformance extraCoinData={extraCoinData}/>
        <CoinDetailsSentiment/>
        <AboutCoin/>
        <CoinDetailsTokenomics/>
        <Team/>
        <CoinDetailsSpikes/>
    </div>
  )
}

export default CoinDetailsMain