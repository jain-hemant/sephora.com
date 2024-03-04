import { Box, Flex, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import LoginModal from '../modal/LoginModal'
import { AppContext } from '../context/AppContext'
import { IoCartOutline, IoPeopleOutline, IoPersonCircleOutline, IoSearchOutline, IoStorefrontOutline } from "react-icons/io5";
import { FaRegHeart } from 'react-icons/fa6'

export default function Header() {
    const { isLoginModalOpen, onLoginModalOpen, onLoginModalClose } = useContext(AppContext);

    return (
        <>
            <Flex w={'80%'} mx={'auto'} justifyContent={"space-between"} gap={"10px"} alignItems={"center"} lineHeight={"40px"} padding={"10px 10px"}>
                <Flex w={"50%"} justify={'space-evenly'}>
                    <Text fontSize={[16, 20]} fontWeight={'2xl'}>
                        <Link to={"/"}>
                            SEPHORA
                        </Link>
                    </Text>
                    <InputGroup width={"70%"}>
                        <InputLeftElement pointerEvents='none'>
                            <IoSearchOutline />
                        </InputLeftElement>
                        <Input type='tel' placeholder='Search...' borderRadius={'20px'} border={'1px solid black'} />
                    </InputGroup>
                </Flex>
                <Flex w={"35%"} justify={'space-between'} fontSize={[14, 14, 16]} >
                    <Flex alignItems={'center'} gap={'10px'}>
                        <IoStorefrontOutline />
                        <Link>Store & Service</Link>

                    </Flex>
                    <Flex alignItems={'center'} gap={'10px'}>
                        <IoPeopleOutline />
                        <Link>Community</Link>

                    </Flex>
                    <Flex alignItems={'center'} gap={'10px'}>
                        <IoPersonCircleOutline />
                        <Link onClick={onLoginModalOpen}>Sign In</Link>
                    </Flex>

                </Flex>
                <Flex w={"15%"} justify={'space-evenly'} fontSize={[14, 14, 16]} >
                    <FaRegHeart size={'20px'} />
                    <IoCartOutline size={'20px'} />
                </Flex>
            </Flex>
            <LoginModal onClose={onLoginModalClose} isOpen={isLoginModalOpen} />
        </>
    )
}
