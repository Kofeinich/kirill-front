import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {BasketPage} from "./pages/BasketPage";
import {MarketPage} from "./pages/MarketPage";
import {UserPage} from "./pages/UserPage";

export const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MarketPage/>,
        },
        {
            path: "/user",
            element: <UserPage/>,
        },
        {
            path: "/basket",
            element: <BasketPage/>,
        }
    ]);

    return (
        <ChakraProvider>
            <RouterProvider router={router} />
        </ChakraProvider>
    );
}

export default App;
