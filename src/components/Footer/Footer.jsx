import React from 'react'
import FooterFeedback from './FooterFeedback'
import FooterCommunicate from './FooterCommunicate'
import FooterMenu from './FooterMenu'
import FooterAddress from './FooterAddress'
import { Box, VStack } from '@chakra-ui/react'

export default function Footer() {
    return (
        <VStack w={"100%"} fontSize={[18, 16, 14]} bg={"black"} color={'white'} >
            <FooterFeedback />
            <FooterCommunicate />
            <FooterMenu />
            <FooterAddress />
        </VStack>

    )
}
