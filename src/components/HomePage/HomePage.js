
import React, { useEffect, useState } from 'react'
import { coinsMarketURL } from '../utils/Constants';
import CryptoRow from './components/CryptoRow';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem, } from '../utils/appSlice';
import InfiniteScroll from "react-infinite-scroll-component";
import TableHeader from './components/TableHeader';
import HomePageShimmer from './components/HomePageShimmer';
import SomethingWentWrong from '../SomethingWentWrong';

const HomePage = (idx) => {

    const [cryptoData, setCryptoData] = useState(null);
    const [renderData, setRenderData ] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (idx)=>{

      const temp = {...cryptoData[idx]};
      dispatch(addItem(temp))

    }

    useEffect(()=>{

      getCryptoData();

    }, [])

    async function getCryptoData(){
      
      try {
        const data = await fetch(coinsMarketURL);
        const json = await data.json();
  
        setCryptoData(json);
        if(json && json.length) {
          setRenderData(json?.slice(0, 15));
        }
      } catch(err) {
        console.log(err);
        navigate('/somethingwentwrong');
      }

    }

    async function fetchMoreData(){

      if(cryptoData && cryptoData.length != 0)  {
        setTimeout(()=>{
          setRenderData(renderData.concat(cryptoData?.slice(renderData.length, renderData.length+15)));
        }, 1000);
      }

    }
    
    
    if(cryptoData === null || renderData === null)
    {
      return (
        <section className='bg-white rounded-3xl '>
          <TableHeader />
          <HomePageShimmer />        
        </section>        
      )
    }    

    if(cryptoData.length === 0 || renderData === 0) {
      navigate('/somethingwentwrong');
    }
    
  return (
    
    <section 
      className='bg-white rounded-3xl'>

        <TableHeader />

        <InfiniteScroll
          dataLength={renderData.length}
          next={fetchMoreData}
          hasMore={cryptoData.length !== renderData.length}
          loader={<HomePageShimmer />}
        >
          {renderData?.map((item, idx)=>{
              return (<Link to={"/"+item?.id} key={item?.id} onClick={()=>{handleClick(idx)}} >
                  <CryptoRow data={item} />
              </Link>)
          })}
        </InfiniteScroll>
        
    </section>
  )
}

export default HomePage