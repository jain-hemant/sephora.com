import React, { useEffect } from 'react'
import axios from 'axios'
import { bannerImage } from '../api/bannerImage'
import { Box, Button, Flex, Image, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import DashboardBanner from './DashboardBanner'
import ProductsSlideCard from '../components/cards/ProductsSlideCard'
export default function Dashboard() {
    function handleClick() {

    }

    return (
        <VStack>
            <DashboardBanner banner={bannerImage.headerBanner} />
            <ProductsSlideCard type={'lip_liner'} />
            <DashboardBanner banner={bannerImage.middleBanner} />
            <ProductsSlideCard type={'blush'} />
            <DashboardBanner banner={bannerImage.footerBanner} />
            <ProductsSlideCard type={'foundation'} />
        </VStack>

    )
}


