import { SimpleGrid, Box, VStack, Text, FormLabel, Input, Button, Spacer, Flex, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import React from 'react'
import footerMenuLink from './footerMenuLink.js'
import { FaFlagUsa } from "react-icons/fa";
import { SiAircanada } from "react-icons/si";

export default function FooterMenu() {
    return (
        <SimpleGrid w={"80%"} p={"10px"} columns={[6]} spacing={"0"} >

            <VStack gridColumnStart={1} gridColumnEnd={2} align={"left"} >
                {
                    footerMenuLink.aboutSephora.map((obj, index) => {
                        return <Link href={obj.route} key={index}>
                            {obj.menuName}
                        </Link>
                    })
                }
            </VStack>
            <VStack gridColumnStart={[1, 1, 1, 2]} gridColumnEnd={[2, 2, 2, 3]} align={"left"}>
                {
                    footerMenuLink.mySephora.map((obj, index) => {
                        return <Link href={obj.route} key={index}>
                            {obj.menuName}
                        </Link>
                    })
                }
            </VStack>
            <VStack gridColumnStart={[1, 1, 1, 3]} gridColumnEnd={[2, 2, 2, 4]} align={"left"}>
                {
                    footerMenuLink.help.map((obj, index) => {
                        return <Link href={obj.route} key={index}>
                            {obj.menuName}
                        </Link>
                    })
                }
            </VStack>
            <VStack gridColumnStart={[1, 1, 1, 4]} gridColumnEnd={[2, 2, 2, 5]} align={'left'}>
                <FaFlagUsa color='white' />
                <Link to='/unitedStateEnglish'>"United State-English"</Link>
                <SiAircanada />
                <Link to='/canadaEnglish"'>Canada-English</Link>
                <SiAircanada />
                <Link to='/canadaFrancais'>Canada-Francais</Link>

            </VStack>
            <VStack gridColumnStart={[1, 1, 1, 5]} gridColumnEnd={[2, 2, 2, 7]} align={'left'}>
                <Box>
                    <Text>We Belong to
                        Something Beautiful
                    </Text>
                </Box>
                <Box>
                    <Box>
                        <Text>Sign up for Sephora text updates</Text> <br />
                        <Flex>
                            <Input type='text' placeholder='Mobile Phone Number' />
                            <Button >Continue</Button>
                        </Flex>
                    </Box>
                    <Box>
                        <Text>Sign up for Sephora Emails</Text> <br />
                        <Flex>
                            <Input type='text' placeholder='Enter Your Email Address' />
                            <Button >Signup</Button>
                        </Flex>
                    </Box>
                </Box>
            </VStack>
        </SimpleGrid >
    )
}
