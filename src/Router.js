import { createBrowserRouter } from "react-router-dom"
import App from './App';
import CoinDetailsPage from './components/CoinDetailsPage/CoinDetailsPage';
import HomePage from "./components/HomePage/HomePage";
import PageNotFound from "./components/PageNotFound";
import SomethingWentWrong from "./components/SomethingWentWrong";

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
            },
            {
                path : "/404",
                element : <PageNotFound/>
            },
            {
                path : "*",
                element : <PageNotFound/>
            },
            {
                path : "/somethingwentwrong",
                element : <SomethingWentWrong/>
            },
            
        ]
    }
])