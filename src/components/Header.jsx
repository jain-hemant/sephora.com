import { Box, Flex, Input, InputGroup, InputLeftElement, Link, Text } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
    return (
        <Flex>
            <Box></Box>
            <Flex justifyContent={"center"}>
                <Box>
                    <Text>SEPHORA</Text>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            {/* <PhoneIcon color='gray.300' /> */}
                        </InputLeftElement>
                        <Input type='tel' placeholder='Phone number' />
                    </InputGroup>
                </Box>
                <Box>
                    <Link>Store & Service</Link>
                    <Link>Community</Link>
                    <Link>Sign In</Link>
                </Box>
                <Box>
                    <Box>Like</Box>
                    <Box>Cart</Box>
                </Box>

            </Flex>
        </Flex>
    )
}
