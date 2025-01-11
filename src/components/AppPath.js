
import React from 'react'
import { useParams, Link } from 'react-router-dom';

const AppPath = () => {
    
    const params = useParams();

    function pascalCase(string) {
      return  string.substr(0,1).toUpperCase() + string.substr(1);      
    }

    return (
      <div className='py-5 px-2 font-semibold text-gray-600 text-sm flex gap-2 items-center '>
          <Link to="/">
            <div>Cryptocurrencies</div>
          </Link>

          {
            params.cryptoId && (
              <>
                <img className='w-4' src="https://cdn-icons-png.flaticon.com/128/2626/2626997.png" alt="" />
                <div className='text-black'>{pascalCase(params.cryptoId)}</div>
              </>
            )
          }
      </div>
    )
}

export default AppPath;