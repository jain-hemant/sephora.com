import React from 'react'
import { bannerImage } from '../api/bannerImage'
import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import DashboardBanner from './DashboardBanner'
export default function Dashboard() {
    return (
        <VStack>
            <DashboardBanner banner={bannerImage.headerBanner} />
            <DashboardBanner banner={bannerImage.middleBanner} />
            <DashboardBanner banner={bannerImage.footerBanner} />

        </VStack>

    )
}
