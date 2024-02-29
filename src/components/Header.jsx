import { Box, Flex, Input, InputGroup, InputLeftElement, Link, Text } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
    return (

        <Flex justifyContent={"space-between"} gap={"10px"} alignItems={"center"} lineHeight={"40px"} padding={"10px 10px"}>
            <Flex>
                <Text>SEPHORA</Text>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        {/* <PhoneIcon color='gray.300' /> */}
                    </InputLeftElement>
                    <Input type='tel' placeholder='Phone number' />
                </InputGroup>
            </Flex>
            <Flex>
                <Link>Store & Service</Link>
                <Link>Community</Link>
                <Link>Sign In</Link>
            </Flex>
            <Flex>
                <Box>Like</Box>
                <Box>Cart</Box>
            </Flex>

        </Flex>
    )
}
