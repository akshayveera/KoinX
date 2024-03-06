
import React from 'react'
import { useParams } from 'react-router-dom'
import SideBar from './SideBar';
import CoinDetailsMain from './CoinDetailsMain';

const CoinDetails = () => {

    const params = useParams();

    console.log(params?.cryptoId);

  return (
    <div className='flex justify-between'>
        <CoinDetailsMain/>
        <SideBar/>
    </div>
  )
}

export default CoinDetails