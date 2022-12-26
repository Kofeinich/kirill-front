import React from 'react';
import ReactDOM from "react-dom/client";
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
        <RouterProvider router={router} />
    );
}

export default App;
