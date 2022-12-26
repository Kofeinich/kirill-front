import React from 'react';
import {Flex} from "chakra-ui";

export const Container = ({children}) => {
    return <Flex
        w={'100%'}
        flexGrow={1}
        alignItems={'flex-start'}
        mr={'auto'}
        ml={'auto'}
        flexDirection={'column'}
    >
        {children}
    </Flex>
}