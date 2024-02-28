import { Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

export default function Footer() {
    return (
        <SimpleGrid columns={5} spacingX='40px' spacingY='20px' bg={"black"}>
            <Box height='80px'></Box>
            <Box height='80px'></Box>
            <Box height='80px'></Box>
            <Box height='80px'></Box>
            <Box height='80px'></Box>
        </SimpleGrid>
    )
}
