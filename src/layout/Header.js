import {Flex} from "chakra-ui";


export const Header = () => {
    return <Flex
        as={'header'}
        w={'100%'}
        position={'fixed'}
        top={'0'}
        left={'0'}
        zIndex={1000}
        justifyContent={'space=between'}
        alignItems={'center'}
        h={'80px'}
        borderBottom={'1px solid #808080'}
    >

    </Flex>
}