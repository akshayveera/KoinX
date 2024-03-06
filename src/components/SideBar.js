
import React,{useState, useEffect} from 'react'
import rightArrow from "../assets/right-arrow.png"
import { trendingCoinsURL } from './utils/Constants';
import { PriceChange } from './utils/PriceChange';

const TrendingElement = ({info})=>{

  console.log(info.item);

  const {name,small,symbol,data } = info.item;

  return (
    <div className='flex items-center justify-between'>

      <div className='flex text-xl font-semibold'>
        <img className='h-7 pr-2' src={small} alt="curreny icon" /> 
        <p>{name}</p> 
        <p>({symbol})</p>
      </div>

      <div className={'flex items-center gap-2 py-1.5 px-3 rounded-lg ' + (data.price_change_percentage_24h.usd>=0 ? 'bg-green-100 ' : 'bg-red-100')} >
        <PriceChange price={data.price_change_percentage_24h.usd} />
      </div>

    </div>
  )
}

const SideBar = () => {

  const [trendingCoins, setTrendingCoins] = useState(null);

  useEffect(()=>{
      getTrendingCoins();
  }, [])

  async function getTrendingCoins(){
    const data = await fetch(trendingCoinsURL);
    const json = await data.json();

    // console.log(json?.coins.slice(0,3));

    setTrendingCoins(json?.coins.slice(0,3));
  }

  if(trendingCoins === null)
  {
    return <h1>Loading...</h1>
  }

  return (
    <div className='w-[30%] flex flex-col gap-10'>

      <div className='flex flex-col gap-5 items-center bg-[#0052fe] p-10 rounded-2xl'>
        <div className='text-center text-white text-2xl font-semibold w-[80%]'>Get Started with KoinX for FREE</div>
        <div className='text-center text-[#eee]'>With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports</div>
        <img className=' h-[240px]' src="https://www.koinx.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLowerSection.7ba5b083.png&w=384&q=75" alt="img" />
        <button className='flex items-center gap-2 bg-white px-5 py-2 text-lg font-semibold rounded-lg'> Get Started for FREE <img className='h-4' src={rightArrow} alt="" /></button>
      </div>

      <div className=' bg-white p-7 rounded-2xl flex flex-col gap-5'> 
        <h1 className='text-3xl  font-semibold'>{"Trending Coins (24h)"}</h1>

        {trendingCoins.map((item)=>{
          return <TrendingElement info={item}/>
        })}

        
      </div>

    </div>
  )
}

export default SideBar