import React from 'react';
import {Flex} from '@chakra-ui/react';
import {Card} from "./Card";

export const Cards = ({addToBasket, itemsData, removeFromBasket, basket}) => {
    const basketIds = []
    for (let r of basket) {
        basketIds.push(r.id)
    }
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
                let onAdd = () => {
                    addToBasket(item)
                }
                let onRemove = () => {
                    removeFromBasket(item)
                }
                if (basketIds.includes(item.id)){
                    onAdd = null
                }else {
                    onRemove = null
                }
                return <Card key={index} id={item.id} name={item.name} price={item.price} onAdd={onAdd} onRemove={onRemove}></Card>
            })}
        </>
    </Flex>
}