import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Cryptocurrencies from './components/Cryptocurrencies';
import CoinDetailsPage from './components/CoinDetailsPage';
import { Provider } from 'react-redux';
import store from "./components/utils/store"

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
        element : <CoinDetailsPage/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={routing}>
      <App/>
    </RouterProvider>
  </Provider>
);
