import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { SlSocialInstagram } from "react-icons/sl";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImYoutube2 } from "react-icons/im";
import { FaPinterest } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";
import { PiTiktokLogo } from "react-icons/pi";
export default function FooterAddress() {
    return (
        <Flex >
            <VStack align={"left"}>
                <Box >
                    <Text>© 2024 Sephora USA, Inc. All rights reserved.</Text>
                </Box>
                <Box>
                    <Link>Privacy Policy</Link>
                    <Link>Terms of Use</Link>
                    <Link> Accessibility</Link>
                    <Link>Sitemap</Link>
                    <Link>Your Privacy Choices</Link>
                </Box>
                <Flex>
                    <Text>1-877-737-4672</Text>
                    <Text>TTY: 1-888-866-9845</Text>
                </Flex>
            </VStack>

            <Flex gap={'20px'}>
                <Link>
                    <SlSocialInstagram />
                </Link>
                <Link>
                    <FaSquareFacebook />
                </Link>
                <Link>
                    <FaSquareXTwitter />
                </Link>
                <Link>
                    <ImYoutube2 />
                </Link>
                <Link>
                    <FaPinterest />
                </Link>
                <Link>
                    <FaSnapchat />
                </Link>
                <Link>
                    <PiTiktokLogo />
                </Link>
            </Flex>
        </Flex>
    )
}

// © 2024 Sephora USA, Inc. All rights reserved.

//

//     