import React, {useState} from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {BasketPage} from "./pages/BasketPage";
import {MarketPage} from "./pages/MarketPage";
import {UserPage} from "./pages/UserPage";

export const App = () => {
    const [basket, setBasket] = useState([])
    const addToBasket = (item) => {
        basket.push(item)
        setBasket(basket)
    }

    const removeFromBasket = (item) => {
        let i = 0
        for (const basketElement of basket) {
            if (basketElement.id === item.id) {
                basket.splice(i, 1)
                break
            }
            i++
        }
        setBasket(basket)
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <MarketPage addToBasket={addToBasket}/>,
        },
        {
            path: "/user",
            element: <UserPage/>,
        },
        {
            path: "/basket",
            element: <BasketPage basket={basket} removeFromBasket={removeFromBasket}/>,
        }
    ]);

    return (
        <ChakraProvider>
            <RouterProvider router={router}/>
        </ChakraProvider>
    );
}

export default App;
