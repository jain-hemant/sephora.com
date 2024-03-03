import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function SingleProduct() {
    const params = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        async function getProduct() {
            const response = await fetch(`https://makeup-api.herokuapp.com/api/v1/products/${params.id}.json`);
            if (response.status === 200) {
                const prod = await response.json();
                console.log(prod);
                setProduct(prod);
            }
        }

        getProduct();
        return () => setProduct({});
    }, [params.id])
    return (
        <Flex justifyContent={"center"} py={"20px"} minH={"500px"}>
            <Flex w={"50%"} justifyContent={"center"}>
                <Image w={'300px'} h={'300px'} src={product.image_link} borderRadius={"50%"} />
            </Flex>
            <Box w={"50%"}>
                <Text sx={{ fontWeight: "bold" }}> {product.name} </Text>
                <Text > {product.brand} </Text>
                <Text > {product.description} </Text>
            </Box>
        </Flex>
    )
}
