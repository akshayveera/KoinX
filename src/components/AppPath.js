
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const AppPath = () => {
    
    const [str, setStr] = useState("Cryptocurrencies");
    

  return (
    <div className='py-5 px-2'>
        {str}
    </div>
  )
}

export default AppPath;