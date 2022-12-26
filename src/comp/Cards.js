import React from 'react';
import {Flex} from '@chakra-ui/react';
import {Card} from "./Card";
export const Cards = ({addToBasket, itemsData}) => {
    return <Flex
        w={'100%'}
        mt={'100px'}
        as={'section'}
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'column'}
    >
        <>
            {itemsData.map((item, index) => {
                return <Card key={index} id={item.id} name={item.name} price={item.price} onAdd={()=>{addToBasket(item)}}></Card>
            })}
        </>
    </Flex>
}