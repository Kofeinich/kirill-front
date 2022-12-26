import React from 'react';
import {Flex, Text, Button} from '@chakra-ui/react';

export const Card = ({id, name, price, onRemove, onAdd}) => {
    let button = <Button
        bg={'white'}
        borderRadius={'4px'}
        border={'1px solid white'}
        fontSize={'12px'}
        color={'#808080'}
        onClick={onAdd}
    >
        Добавить в корзину
    </Button>
    if (onAdd == null){
        button = <Button
            bg={'white'}
            borderRadius={'4px'}
            border={'1px solid white'}
            fontSize={'12px'}
            color={'#808080'}
            onClick={onRemove}
        >
            Удалить из корзины
        </Button>
    }
    return <Flex
        mt={'25px'}
        w={'320px'}
        borderRadius={'8px'}
        bg={'#8cede7'}
        p={'40px'}
        alignItems={'center'}
        flexDirection={'column'}
    >
        <Flex
            w={'100%'}
            mb={'10px'}
            justifyContent={'space-between'}
        >
            <Text>{id}</Text>
            <Text>{name}</Text>
        </Flex>
        <Flex
            mb={'10px'}
            w={'100%'}
            justifyContent={'space-between'}
        >
            {button}
            <Text>{price}</Text>
        </Flex>
    </Flex>
}