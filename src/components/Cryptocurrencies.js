
import React, { useEffect, useState } from 'react'
import { coinsMarketURL } from './Constants';
import CryptoHead from './CryptoHead';
import CryptoRow from './CryptoRow';

const Cryptocurrencies = () => {

    const [cryptoData, setCryptoData] = useState(null);

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
            return <CryptoRow key={item?.id} number={idx+1} data={item} />
        })}
 
        
        
    </section>
  )
}

export default Cryptocurrencies