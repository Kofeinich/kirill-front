import React from 'react';
import {Flex, Text, Button} from "chakra-ui";

export const Card = ({id, name, price}) => {
    return <Flex
        w={'320px'}
        borderRadius={'8px'}
        bg={'#8cede7'}
        p={'40px'}
        alignItems={'center'}
    >
        <Flex
            justifyContent={'space-between'}
        >
            <Text>{id}</Text>
            <Text>{name}</Text>
        </Flex>
        <Flex
            justifyContent={'space-between'}
        >
            <Button
                bg={'white'}
                borderRadius={'4px'}
                border={'1px solid white'}
                fontSize={'12px'}
                color={'#808080'}
            >
                Добавить в корзину
            </Button>
            <Text>{price}</Text>
        </Flex>
    </Flex>
}