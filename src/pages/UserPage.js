import React, {useEffect, useState} from 'react';
import {Layout} from "../layout/Layout";
import {me, orders} from "../api";

export const UserPage = () => {
    const [meData, setMe] = useState(null)
    const [ordersData, setOrdersData] = useState(null)
    useEffect(async () => {
        setMe(await me())
        setOrdersData(await orders())
    }, [])
    if (meData == null)
        return <></>
    return <Layout>
        Username: {meData.name}
        {meData["cards"].map((card, i) =>
            <div key={i}>Card {"activated" ? card.activated : " not activated"} {card.number}</div>
        )}
        Orders
        {ordersData.map((order, i) => <div key={i}>{JSON.stringify(order)}</div>)}
    </Layout>
}