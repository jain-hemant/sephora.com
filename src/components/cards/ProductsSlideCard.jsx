import React, { useContext, useEffect, useState } from 'react'
import { ApiContext } from '../../context/ApiContext'
import { Box, Flex, Progress } from '@chakra-ui/react'
import ProductCard from './ProductCard'

export default function ProductsSlideCard({ type }) {
    const apiData = useContext(ApiContext)
    const [products, setProducts] = useState([])
    console.log(apiData)
    useEffect(() => {
        if (!products.length && apiData.length) {
            const prod = apiData.filter((product) => {
                return product.product_type === type;
            })
            setProducts(prod);
        }
    }, [apiData])

    if (products.length) {
        return (
            <Flex overflowX="auto" maxW={"90vw"} mx={"5vw"} whiteSpace={"nowrap"} scrollBehavior={"smooth"} sx={{ "&::-webkit-scrollbar": { display: "none" } }}>
                {
                    products.map((product, index) => {
                        return <ProductCard key={product.id} product={product} />
                    })
                }
            </Flex>
        )
    } else {
        return (
            <Box minW={"400px"} minH={"200px"} p={"0px 2px"}>
                <Progress size='xs' isIndeterminate />
            </Box>
        )
    }
}
