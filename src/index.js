import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const routing = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routing}>
    <App/>
  </RouterProvider>
);
