import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navigation'
import AppContextProvider from './AppContext'

export default function ApplicationProvider({ children }) {
    return (
        <AppContextProvider>
            <Box width={"98.7vw"} boxSizing={"border-box"}>
                < Header />
                <Navigation />
                {children}
                <Footer />
            </Box>
        </AppContextProvider>
    )
}
