
import React from 'react'
import { useParams } from 'react-router-dom'
import CoinDetailsBody from './CoinDetailsBody';
import SideBar from './SideBar';

const CoinDetails = () => {

    const params = useParams();

    console.log(params?.cryptoId);

  return (
    <div className='flex justify-between'>
        <CoinDetailsBody/>
        <SideBar/>
    </div>
  )
}

export default CoinDetails