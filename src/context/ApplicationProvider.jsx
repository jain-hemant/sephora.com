import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navigation'
import AppContextProvider from './AppContext'
import ApiContext from './ApiContext'
import ApiContextProvider from './ApiContext'

export default function ApplicationProvider({ children }) {


    return (
        <AppContextProvider>
            <ApiContextProvider>
                <Box width={"98.7vw"} boxSizing={"border-box"}>
                    < Header />
                    <Navigation />
                    {children}
                    <Footer />
                    {/* <ApiContext /> */}
                </Box>
            </ApiContextProvider>
        </AppContextProvider>
    )
}
