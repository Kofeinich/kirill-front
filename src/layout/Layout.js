import React from 'react';
import {Flex} from '@chakra-ui/react';
import {Header} from "./Header";
import {Container} from "./Container";

export const Layout =({children}) => {
    return <Flex
        position={'relative'}
        flexDirection={'column'}
        w={'100%'}
    >
        <Header/>
        <Container>
            {children}
        </Container>
    </Flex>
}