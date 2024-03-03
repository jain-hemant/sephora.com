import { Box, Flex, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import LoginModal from '../modal/LoginModal'
import { AppContext } from '../context/AppContext'

export default function Header() {
    const { isLoginModalOpen, onLoginModalOpen, onLoginModalClose } = useContext(AppContext);

    return (
        <>
            <Flex justifyContent={"space-between"} gap={"10px"} alignItems={"center"} lineHeight={"40px"} padding={"10px 10px"}>
                <Flex w={"50%"} justify={'space-evenly'}>
                    <Text fontSize={[18, 28]} fontWeight={'2xl'}>
                        <Link to={"/"}>
                            SEPHORA
                        </Link>
                    </Text>
                    <InputGroup width={"70%"}>
                        <InputLeftElement pointerEvents='none'>
                            {/* <PhoneIcon color='gray.300' /> */}
                        </InputLeftElement>
                        <Input type='tel' placeholder='Phone number' borderRadius={'20px'} border={'1px solid black'} />
                    </InputGroup>
                </Flex>
                <Flex w={"35%"} justify={'space-between'} >
                    <Link>Store & Service</Link>
                    <Link>Community</Link>
                    <Link onClick={onLoginModalOpen}>Sign In</Link>
                </Flex>
                <Flex w={"15%"} justify={'space-evenly'} >
                    <Box>Like</Box>
                    <Box>Cart</Box>
                </Flex>

            </Flex>
            <LoginModal onClose={onLoginModalClose} isOpen={isLoginModalOpen} />
        </>
    )
}
