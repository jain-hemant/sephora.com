import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navigation'

export default function ApplicationProvider({ children }) {
    return (
        <Box width={"98.7vw"} boxSizing={"border-box"}>
            < Header />
            <Navigation />
            {children}
            <Footer />
        </Box>
    )
}
