import { Box, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
export const ApiContext = createContext([])
export default function ApiContextProvider({ children }) {
    const [apiData, setApiData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        data()
    }, [])
    useEffect(() => {
        console.log(apiData);
    }, [apiData])
    async function data() {
        try {
            setLoading(true)
            const response = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json');
            setApiData(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }
    }
    return (
        <ApiContext.Provider value={apiData}>
            {children}
        </ApiContext.Provider>

    )

}
