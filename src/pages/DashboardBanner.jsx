import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function DashboardBanner({ banner }) {
    return (
        <Flex>
            {
                banner.map(({ image, title, description, urlName, url }, index) => {
                    return <Box key={index}>
                        <Box>
                            <Image src={image} />
                        </Box>
                        <Box>
                            <Text fontSize={[18, 20, 22]} fontWeight={"bold"}>{title}</Text>
                            <Text fontSize={[12, 12, 14]} >{description}</Text>
                            <Text fontWeight={"bold"}><Link to={url} >{urlName}</Link></Text>
                        </Box>

                    </Box>
                })
            }
        </Flex>
    )
}
