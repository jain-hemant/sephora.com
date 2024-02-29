import { Flex, Link } from '@chakra-ui/react'

import React from 'react'

export default function FooterFeedback() {
    return (
        <Flex w={"100%"} p={"10px 0px"} justify={'center'} textDecor={"none"} bg={"#ccc"} color={"black"} >
            <Link href=''>Website feedback? Let us know ▸</Link>
        </Flex>
    )
}
