import React, {useEffect, useState} from 'react';
import {Layout} from "../layout/Layout";
import {Card} from "../comp/Card";
import {Flex} from "chakra-ui";

export const BasketPage = ({removeFromBasket, basket}) => {
    return <Layout>
        <Flex as={'section'} alignItems={'center'}>
            <>
                {basket.map((item, index) => {
                    return <Card key={index} id={item.id} name={item.name} price={item.price} onRemove={()=>{removeFromBasket(item)}}></Card>
                })}
            </>
        </Flex>
    </Layout>
}
