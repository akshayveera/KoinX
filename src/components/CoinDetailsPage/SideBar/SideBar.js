import React,{useState, useEffect} from 'react'
import rightArrow from "../../../assets/right-arrow.png"
import { trendingCoinsURL } from '../../utils/Constants';
import { useDispatch } from 'react-redux';
import { addSpikes, clearSpikes } from '../../utils/appSlice';
import TrendingElement from './components/TrendingElement';

const SideBar = () => {

  const [trendingCoins, setTrendingCoins] = useState(null);

  const dispatch = useDispatch();

  useEffect(()=>{

      getTrendingCoins();

      return ()=>{
        dispatch(clearSpikes());
      }
  }, [])

  async function getTrendingCoins(){
    const data = await fetch(trendingCoinsURL);
    const json = await data.json();

    dispatch(addSpikes(json?.coins));
    setTrendingCoins(json?.coins.slice(0,3));
  }

  if(trendingCoins === null)
  {
    return <h1>Loading...</h1>
  }

  return (
    <div className='xl:w-[30%] w-full flex xl:flex-col md:flex-row flex-col gap-10 relative'>

      <div className='flex flex-col gap-5 items-center bg-gradient-to-r from-blue-600 to-blue-800 p-10 rounded-2xl xl:w-full md:w-[48%] w-full'>
        <div  className='text-center text-white text-2xl font-semibold w-[80%]'>Get Started with KoinX for FREE</div>
        <div  className='text-center text-[#eee]'>With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports</div>
        <img className=' h-[240px]' src="https://www.koinx.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLowerSection.7ba5b083.png&w=384&q=75" alt="img" />
        <button className='flex items-center gap-2 bg-white px-5 py-2 text-lg font-semibold rounded-lg'> Get Started for FREE <img key="right arrow" className='h-4' src={rightArrow} alt="right-arrow" /></button>
      </div>

      <div className=' bg-white p-7 rounded-2xl h-fit flex flex-col gap-5 xl:w-full md:w-[48%] w-full '> 
        <h1 className='text-xl  font-semibold'>{"Trending Coins (24h)"}</h1>

        {trendingCoins.map((item,idx)=>{
          return <TrendingElement key={item?.name+"-"+idx} info={item}/>
        })}
        
      </div>

    </div>
  )
}

export default SideBar