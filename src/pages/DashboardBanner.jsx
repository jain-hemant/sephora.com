import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function DashboardBanner({ banner }) {
    return (
        <Flex overflowX="auto" maxW={"98vw"} mx={'1vw'} whiteSpace={"nowrap"} scrollBehavior={"smooth"} sx={{ "&::-webkit-scrollbar": { display: "none" } }}>
            {
                banner.map(({ image, title, description, urlName, url, bgColor }, index) => {
                    return <Box key={index} minW={"400px"} p={"5px 3px 0px 3px"} sx={{ textWrap: "wrap" }} >
                        <Image src={image} sx={{ width: "600px", textWrap: "wrap" }} borderRadius={'5px 5px 0px 0px'} />
                        <Box p={"20px 10px"} bg={bgColor} >
                            <Text fontSize={[12, 12, 14]} fontWeight={"bold"}>{title}</Text>
                            <Text fontSize={[10, 10, 12]} >{description}</Text>
                            <Text fontSize={[10, 10, 12]} fontWeight={"bold"}><Link to={url} >{urlName}</Link></Text>
                        </Box>

                    </Box>
                })
            }
        </Flex>
    )
}


