import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function DashboardBanner({ banner }) {
    return (
        <Flex overflowX="auto" maxW={"100vw"} whiteSpace={"nowrap"} scrollBehavior={"smooth"} sx={{ "&::-webkit-scrollbar": { display: "none" } }}>
            {
                banner.map(({ image, title, description, urlName, url }, index) => {
                    return <Box key={index} minW={"400px"}>
                        <Image src={image} sx={{ width: "800px" }} />
                        <Box p={"10px"} >
                            <Text fontSize={[12, 12, 14]} fontWeight={"bold"}>{title}</Text>
                            <Text fontSize={[10, 10, 12]} >{description}</Text>
                            <Text fontWeight={"bold"}><Link to={url} >{urlName}</Link></Text>
                        </Box>

                    </Box>
                })
            }
        </Flex>
    )
}


