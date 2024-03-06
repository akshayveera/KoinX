import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Cryptocurrencies from './components/Cryptocurrencies';
import CoinDetails from './components/CoinDetails';

const routing = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
        path : "/",
        element : <Cryptocurrencies/>
      },
      {
        path : "/:cryptoId",
        element : <CoinDetails/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routing}>
    <App/>
  </RouterProvider>
);
