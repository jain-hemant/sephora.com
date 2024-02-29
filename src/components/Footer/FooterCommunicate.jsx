import { Box, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import React from 'react'
import { FaMapLocationDot } from "react-icons/fa6";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { HiOutlineCreditCard } from "react-icons/hi2";
import { GrAppsRounded } from "react-icons/gr";

export default function FooterCommunicate() {
    return (
        <Flex w={"100%"} justify={'space-evenly'}>
            <Flex alignItems={'center'} gap={'10px'}>
                <FaMapLocationDot size={'24px'} />
                <Box>
                    <Link>Find a Store</Link>
                    <Text >Choose Your Store</Text>
                </Box>
            </Flex>
            <Flex alignItems={'center'} gap={'10px'}>
                <IoChatbubbleEllipsesOutline size={'24px'} />
                <Box>
                    <Link>Customer Services</Link>
                    <Text>Chat is unavailble</Text>
                </Box>
            </Flex>
            <Flex alignItems={'center'} gap={'10px'}>
                <GrAppsRounded size={'24px'} />
                <Box>
                    <Link>Get The App</Link>
                    <Text>download Now</Text>
                </Box>
            </Flex>
            <Flex alignItems={'center'} gap={'10px'}>
                <TbDeviceLandlinePhone size={'24px'} />
                <Box>
                    <Link>Get Sephora Text Alert</Link>
                    <Text>Sign up Now</Text>
                </Box>
            </Flex>
            <Flex alignItems={'center'} gap={'10px'}>
                <HiOutlineCreditCard size={'24px'} />
                <Box>
                    <Link>Sephora Credit Card Program</Link>
                    <Text>Want 25% off your Sephora purchase
                    </Text>
                </Box>
            </Flex>
        </Flex >
    )
}
