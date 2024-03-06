

import React from 'react'

const CryptoRow = ({head, styling}) => {

  return (
    <div className={'flex ' + styling}>
        <div className='w-[20%]'>{head[0]}</div>
        <div className='w-[14%] text-right'>{head[1]}</div>
        <div className='w-[12%] text-right'>{head[2]}</div>
        <div className='w-[12%] text-right'>{head[3]}</div>
        <div className='w-[12%] text-right'>{head[4]}</div>
        <div className='w-[15%] text-right'>{head[5]}</div>
        <div className='w-[15%] text-right'>{head[6]}</div>
    </div>
  )
}

export default CryptoRow