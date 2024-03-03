import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function DashboardBanner({ banner }) {
    return (
        <Flex overflowX="auto" maxW={"98vw"} mx={'1vw'} whiteSpace={"nowrap"} scrollBehavior={"smooth"} sx={{ "&::-webkit-scrollbar": { display: "none" } }}>
            {
                banner.map(({ image, title, description, urlName, url }, index) => {
                    return <Box key={index} minW={"400px"} p={"0px 2px"} sx={{ textWrap: "wrap" }}>
                        <Image src={image} sx={{ width: "600px", textWrap: "wrap" }} />
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


