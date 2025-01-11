import { createBrowserRouter } from "react-router-dom"
import App from './App';
import CoinDetailsPage from './components/CoinDetailsPage/CoinDetailsPage';
import HomePage from "./components/HomePage/HomePage";

export const routesConfig = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
        {
            path : "/",
            element : <HomePage/>
        },
        {
            path : "/:cryptoId",
            element : <CoinDetailsPage/>
        }
        ]
    }
])