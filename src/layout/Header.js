import {Flex, Text} from '@chakra-ui/react';
import {PlusSquareIcon } from '@chakra-ui/icons';
import { NavLink } from "react-router-dom";


export const Header = () => {
    return <Flex
        bg={'white'}
        p={'0 50px'}
        as={'header'}
        w={'100%'}
        position={'fixed'}
        top={'0'}
        left={'0'}
        zIndex={1000}
        justifyContent={'right'}
        alignItems={'center'}
        h={'80px'}
        borderBottom={'1px solid #808080'}
    >
        <NavLink
            to="/"
        >
            <Text fontSize={'16px'} color={'#8cede7'} mr={'15px'}>Market</Text>
        </NavLink>

        <NavLink
            to="/user"
        >
            <Text fontSize={'16px'} color={'#8cede7'}mr={'15px'}>My Account</Text>
        </NavLink>

        <NavLink
            to="/basket"
        >
            <PlusSquareIcon fontSize={'16px'} color={'#8cede7'}/>
        </NavLink>
    </Flex>
}