import React from 'react';
import {Flex} from "chakra-ui";
import {Card} from "./Card";
export const Cards = () => {
    const mock = [ { "id": 1, "name": "пончик", "price": 120 }, { "id": 2, "name": "вафли", "price": 140 }, { "id": 3, "name": "сок", "price": 100 }, { "id": 4, "name": "колбаса", "price": 300 }, { "id": 5, "name": "мыло", "price": 200 }, { "id": 6, "name": "вишня", "price": 30 } ]

    return <Flex as={'section'} alignItems={'center'}>
        <>
            {mock.map((item, index) => {
                return <Card key={index} id={item.id} name={item.name} price={item.price}></Card>
            })}
        </>
    </Flex>
}