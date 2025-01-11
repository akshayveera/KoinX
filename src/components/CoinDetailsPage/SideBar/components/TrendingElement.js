
import React from 'react'
import { PriceChange } from '../../../utils/PriceChange';

const TrendingElement = ({info})=>{

    const {name,small,symbol,data } = info.item;
  
    return (
      <div className='flex items-center justify-between '>
  
        <div className='flex  font-semibold text-sm'>
          <img className='h-7 pr-2' src={small} alt="curreny icon" /> 
          <p>{name}</p> 
          <p>({symbol})</p>
        </div>
  
        <div className={'flex items-center gap-2 py-1.5 px-3 rounded-lg text-sm  ' + (data.price_change_percentage_24h.usd>=0 ? 'bg-green-100 ' : 'bg-red-100')} >
          <PriceChange price={data.price_change_percentage_24h.usd} />
        </div>
  
      </div>
    )
  }

export default TrendingElement