
import React, { useEffect } from 'react'
import SideBar from './SideBar';
import CoinDetailsMain from './CoinDetailsMain';
import { useDispatch } from 'react-redux';
import { clearData } from './utils/appSlice';


const CoinDetails = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    
    return ()=>{
      dispatch(clearData());
    }
  },[])

  return (
    <div className='  xl:flex-row xl:justify-between xl:gap-0 flex flex-col gap-10  '>
        <CoinDetailsMain/>
        <SideBar/>
    </div>
  )
}

export default CoinDetails