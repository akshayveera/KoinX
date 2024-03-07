
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';

const AppPath = () => {
    
    const [str, setStr] = useState("Cryptocurrencies");
    const [notHome, setNotHome] = useState(false);
    
    const params = useParams();

    useEffect(()=>{
      if(params.cryptoId)
      {
        setStr("Cryptocurrencies"+" > "+params.cryptoId);
        setNotHome(true);
      }else{
        setNotHome(false);
      }

      return ()=>{
        setStr("Cryptocurrencies");
      }
    },[params])


  return (
    <div className='py-5 px-2 font-semibold text-gray-600 text-sm flex gap-2'>
        <div>{str}</div>
        {notHome && <Link to="/">{"<"}</Link> }        
    </div>
  )
}

export default AppPath;