import React, {useEffect, useState} from 'react';
import {Layout} from "../layout/Layout";
import {me, orders} from "../api";
import {Text, Flex} from "chakra-ui";

export const UserPage = () => {
    const [meData, setMe] = useState(null)
    const [ordersData, setOrdersData] = useState(null)
    const fetchData = async () => {
        setMe(await me())
        setOrdersData(await orders())
    }
    useEffect(() => {
       fetchData()
    }, [])

    if (meData == null)
        return <></>

    const username = meData.name

    return <Layout>
        <Flex w={'100%'}>
            <Text>Username: {username}</Text>
            {meData["cards"].map((card, i) =>
                <div key={i}>Card {"activated" ? card.activated : " not activated"} {card.number}</div>
            )}
            <Text>Orders</Text>
            {ordersData.map((order, i) => <div key={i}>{JSON.stringify(order)}</div>)}
        </Flex>
    </Layout>
}