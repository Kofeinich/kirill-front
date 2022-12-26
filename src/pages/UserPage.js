import React, {useEffect, useState} from 'react';
import {Layout} from "../layout/Layout";
import {me, orders} from "../api";
import {Text, Flex, Heading} from "chakra-ui";
import {Header} from "../layout/Header";
import {Card} from "../comp/Card";

export const UserPage = () => {
    const [meData, setMe] = useState(null)
    const [ordersData, setOrdersData] = useState(null)

    useEffect(() => {
        me().then(setMe)
        orders().then(setOrdersData)
    }, [])

    if (meData == null)
        return <></>
    if (ordersData == null)
        return <></>

    const username = meData.name

    return <Layout>
        <Flex  p={'0 100px'} width={'100%'} justifyContent={'space-between'}>
        <Flex paddingTop={"100px"} w={'100%'} h={"500px"} flexDirection={"column"} justifyContent={'space-between'}>
            <Heading  as={"h1"}>Профиль</Heading>
            <Text>Имя: {username}</Text>
            <Heading  as={"h1"}>Карты</Heading>
            {meData["cards"].map((card, i) =>
                <div key={i}><Text>Карта {card.activated ? "активирована" : "не активирована"}, номер:  {card.number}</Text></div>
            )}
            <Heading  as={"h1"}>Заказы</Heading>
            {ordersData.map((order, i) => <div key={i}>
                Id: {order.id}, Дата: {order.date}, Продукты: {order.ordered_products.map((r)=>r.name).join(', ')}
                {/*{JSON.stringify(order)}*/}
            </div>)}
        </Flex>
        </Flex>
    </Layout>
}