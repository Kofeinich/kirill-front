import React, {useState} from 'react';
import {Flex, Text, Button} from '@chakra-ui/react';

export const Card = ({id, name, price, onRemove, onAdd}) => {

    const [isAdded, setIsAdded] = useState(false)

    let button = <Button
        bg={'white'}
        borderRadius={'4px'}
        border={'1px solid white'}
        fontSize={'12px'}
        color={'#808080'}
        onClick={() => {

            if (!isAdded) {
                onAdd()
                setIsAdded(!isAdded)
            } else {
                onRemove()
                setIsAdded(!isAdded)
            }
        }}
    >
        {!isAdded ? 'Добавить в корзину' : 'Удалить из корзины' }
    </Button>

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