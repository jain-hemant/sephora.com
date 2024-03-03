import { Box, Flex, Link, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

export default function Navigation() {
    const menus = [{ name: "New", route: "/new" }, { name: "Brand", route: "/brands" },
    { Name: "Makeup", route: "/makeup" }, { name: "SkinCare", route: "/skinCare" },
    { name: "Hair", route: "/hair" }, { name: "Fragrance", route: "/fragrance" },
    { name: "Tools & Brushes", route: "/toolsBrushes" }, { name: "Bath & Body", route: "/bathBody" },
    { name: "Mini Size", route: "/miniSize" }, { name: "Gift & Gift Card", route: "/giftGiftCard" },
    { name: "Beauty under $20", route: "/beautyUnder20" }, { name: "Sales & Offers", route: "/salesOffer" }]
    return (
        <Flex bg={'black'} color={'white'} >
            <NavigationArgs menus={menus} />
        </Flex>
    )
}
function NavigationArgs({ menus }) {
    return <Flex w={'80%'} justifyContent={'space-between'} margin={'auto'} >
        {
            menus.map((menu, index) => {
                return <Box key={index} justifyContent={"space-evenly"} p={"10px"}>
                    <Link href={menu.route} fontSize={[12, 12, 14]} >{menu.name}</Link>
                </Box>
            })
        }

    </Flex>
}
