
import React, { useEffect, useState } from 'react'
import { coinsMarketURL } from './utils/Constants';
import CryptoRow from './CryptoRow';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem, } from './utils/appSlice';

const Cryptocurrencies = (idx) => {

    const [cryptoData, setCryptoData] = useState([
      {
        "id": "bitcoin",
        "symbol": "btc",
        "name": "Bitcoin",
        "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
        "current_price": 66812,
        "market_cap": 1311555932955,
        "market_cap_rank": 1,
        "fully_diluted_valuation": 1401864369410,
        "total_volume": 56320186083,
        "high_24h": 67510,
        "low_24h": 65590,
        "price_change_24h": -450.98625208824524,
        "price_change_percentage_24h": -0.67048,
        "market_cap_change_24h": -5538567947.613037,
        "market_cap_change_percentage_24h": -0.42051,
        "circulating_supply": 19647175.0,
        "total_supply": 21000000.0,
        "max_supply": 21000000.0,
        "ath": 69045,
        "ath_change_percentage": -3.31571,
        "ath_date": "2021-11-10T14:24:11.849Z",
        "atl": 67.81,
        "atl_change_percentage": 98346.29203,
        "atl_date": "2013-07-06T00:00:00.000Z",
        "roi": null,
        "last_updated": "2024-03-07T09:22:31.044Z"
      },
      {
        "id": "ethereum",
        "symbol": "eth",
        "name": "Ethereum",
        "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
        "current_price": 3799.23,
        "market_cap": 456244585241,
        "market_cap_rank": 2,
        "fully_diluted_valuation": 456244585241,
        "total_volume": 31384520828,
        "high_24h": 3897.96,
        "low_24h": 3746.1,
        "price_change_24h": -56.19964020725092,
        "price_change_percentage_24h": -1.45768,
        "market_cap_change_24h": -4808936120.326538,
        "market_cap_change_percentage_24h": -1.04303,
        "circulating_supply": 120114025.48535,
        "total_supply": 120114025.48535,
        "max_supply": null,
        "ath": 4878.26,
        "ath_change_percentage": -22.13554,
        "ath_date": "2021-11-10T14:24:19.604Z",
        "atl": 0.432979,
        "atl_change_percentage": 877178.67028,
        "atl_date": "2015-10-20T00:00:00.000Z",
        "roi": {
          "times": 75.02201206083689,
          "currency": "btc",
          "percentage": 7502.201206083689
        },
        "last_updated": "2024-03-07T09:22:04.127Z"
      },
      {
        "id": "tether",
        "symbol": "usdt",
        "name": "Tether",
        "image": "https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661",
        "current_price": 1.0,
        "market_cap": 100763125004,
        "market_cap_rank": 3,
        "fully_diluted_valuation": 100763125004,
        "total_volume": 98410800150,
        "high_24h": 1.005,
        "low_24h": 0.991779,
        "price_change_24h": 0.00053715,
        "price_change_percentage_24h": 0.05373,
        "market_cap_change_24h": 342827848,
        "market_cap_change_percentage_24h": 0.34139,
        "circulating_supply": 100729057191.324,
        "total_supply": 100729057191.324,
        "max_supply": null,
        "ath": 1.32,
        "ath_change_percentage": -24.39409,
        "ath_date": "2018-07-24T00:00:00.000Z",
        "atl": 0.572521,
        "atl_change_percentage": 74.72516,
        "atl_date": "2015-03-02T00:00:00.000Z",
        "roi": null,
        "last_updated": "2024-03-07T09:20:12.598Z"
      }
    ]);

    const dispatch = useDispatch();

    const handleClick = (idx)=>{

      const temp = {...cryptoData[idx]};
      dispatch(addItem(temp))

    }

    useEffect(()=>{

        getCryptoData();

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
    <section 
      className='bg-white rounded-3xl'>

        <div className={'flex font-semibold h-16 items-center border-b-2'}>
            <div className='xl:w-[20%] sm:w-[30%] w-[60%] pl-7'># NAME</div>
            <div className='xl:w-[12%] sm:w-[17%] w-[40%] sm:pr-0 pr-7 text-right'>PRICE</div>
            <div className='xl:w-[8%] sm:w-[17%] sm:block hidden text-right'>1H</div>
            <div className='xl:w-[8%] sm:w-[17%] sm:block hidden text-right'>24H</div>
            <div className='xl:w-[8%] sm:w-[17%] sm:block hidden sm:pr-7 text-right'>7D</div>
            <div className='xl:w-[22%] xl:block hidden text-right'>MARKET CAP</div>
            <div className='xl:w-[22%] xl:block hidden text-right pr-7'>CALCULATING SUPPLY</div>
        </div>

        {cryptoData?.map((item, idx)=>{
            return (<Link to={"/"+item?.id} key={item?.id} onClick={()=>{handleClick(idx)}} >
                <CryptoRow data={item} />
            </Link>)
        })}    
        
    </section>
  )
}

export default Cryptocurrencies