
import React, { useEffect, useState } from 'react'
import { coinsMarketURL } from './utils/Constants';
import CryptoRow from './CryptoRow';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from './utils/appSlice';

const Cryptocurrencies = () => {

    const [cryptoData, setCryptoData] = useState(null);

    const dispatch = useDispatch();

    const handleClick = (idx)=>{

      console.log("item.name : ", cryptoData[0]);

      // const temp = {
      //   name : item.name,
      //   symbol : item.symbol,
      //   market_cap_rank : item.market_cap_rank,        
      // }
      // dispatch(addItem(temp))
    }

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
            return (<Link to={"/"+item?.id} key={item?.id} onClick={()=>{handleClick()}} >
                <CryptoRow data={item} />
            </Link>)
        })}    
        
    </section>
  )
}

export default Cryptocurrencies