
import React, { useEffect, useState } from 'react'
import { coinsMarketURL } from './utils/Constants';
import CryptoRow from './CryptoRow';
import { Link } from 'react-router-dom';

const Cryptocurrencies = () => {

    const [cryptoData, setCryptoData] = useState([
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
            "price_change_percentage_7d_in_currency": 11.413829667402151
          },
          {
            "id": "ethereum",
            "symbol": "eth",
            "name": "Ethereum",
            "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
            "current_price": 3553.48,
            "market_cap": 427153354153,
            "market_cap_rank": 2,
            "fully_diluted_valuation": 427153354153,
            "total_volume": 53630467904,
            "high_24h": 3817.25,
            "low_24h": 3360.08,
            "price_change_24h": -169.23980334076396,
            "price_change_percentage_24h": -4.54613,
            "market_cap_change_24h": -19440253516.95807,
            "market_cap_change_percentage_24h": -4.35301,
            "circulating_supply": 120119793.990196,
            "total_supply": 120119793.990196,
            "max_supply": null,
            "ath": 4878.26,
            "ath_change_percentage": -27.10158,
            "ath_date": "2021-11-10T14:24:19.604Z",
            "atl": 0.432979,
            "atl_change_percentage": 821227.62911,
            "atl_date": "2015-10-20T00:00:00.000Z",
            "roi": {
              "times": 73.84219508140555,
              "currency": "btc",
              "percentage": 7384.219508140555
            },
            "last_updated": "2024-03-06T04:31:25.442Z",
            "price_change_percentage_1h_in_currency": 0.33817432439571765,
            "price_change_percentage_24h_in_currency": -4.546134286098969,
            "price_change_percentage_7d_in_currency": 9.386780589331654
          },
          {
            "id": "tether",
            "symbol": "usdt",
            "name": "Tether",
            "image": "https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661",
            "current_price": 1.0,
            "market_cap": 100608445357,
            "market_cap_rank": 3,
            "fully_diluted_valuation": 100608445357,
            "total_volume": 171307085479,
            "high_24h": 1.006,
            "low_24h": 0.989758,
            "price_change_24h": -0.001691373117651107,
            "price_change_percentage_24h": -0.16887,
            "market_cap_change_24h": 541806976,
            "market_cap_change_percentage_24h": 0.54145,
            "circulating_supply": 100440278569.944,
            "total_supply": 100440278569.944,
            "max_supply": null,
            "ath": 1.32,
            "ath_change_percentage": -24.29311,
            "ath_date": "2018-07-24T00:00:00.000Z",
            "atl": 0.572521,
            "atl_change_percentage": 74.95852,
            "atl_date": "2015-03-02T00:00:00.000Z",
            "roi": null,
            "last_updated": "2024-03-06T04:30:00.655Z",
            "price_change_percentage_1h_in_currency": -0.16323907705300486,
            "price_change_percentage_24h_in_currency": -0.16887126910319808,
            "price_change_percentage_7d_in_currency": -0.03269617279972002
          }
    ]);

    useEffect(()=>{

        // getCryptoData();

    }, [])

    async function getCryptoData(){

        const data = await fetch(coinsMarketURL);
        const json = await data.json();

        setCryptoData(json);
    }



    if(cryptoData===null)
    {
        return <p>loading..</p>
    }
    
  return (
    <section className='bg-white rounded-3xl'>

        <div className={'flex font-semibold h-16 items-center border-b-2'}>
            <div className='w-[20%] pl-7'># NAME</div>
            <div className='w-[12%] text-right'>PRICE</div>
            <div className='w-[8%] text-right'>1H</div>
            <div className='w-[8%] text-right'>24H</div>
            <div className='w-[8%] text-right'>7D</div>
            <div className='w-[22%] text-right'>MARKET CAP</div>
            <div className='w-[22%] text-right pr-7'>CALCULATING SUPPLY</div>
        </div>

        {cryptoData?.map((item, idx)=>{
            return (<Link to={"/"+item?.id} key={item?.id}>
                <CryptoRow data={item} />
            </Link>)
        })}    
        
    </section>
  )
}

export default Cryptocurrencies