import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function SingleProduct() {
    const params = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        async function getProduct() {
            const response = await fetch(`https://makeup-api.herokuapp.com/api/v1/products/${params.id}.json`);
            if (response.status === 200) {
                const prod = await response.json();
                // console.log(prod);
                setProduct(prod);
            }
        }

        getProduct();
        return () => setProduct({});
    }, [params.id])
    // console.log(product?.product_colors?.[0]?.hex_value);
    return (
        <Flex justifyContent={"center"} py={"20px"} minH={"500px"}>
            <Flex w={"50%"} justifyContent={"center"}>
                <Image w={'300px'} h={'300px'} src={product.image_link} borderRadius={"50%"} />
            </Flex>
            <Box w={"50%"} px={'5%'}>
                <Text sx={{ fontWeight: "bold" }}> {product.name} </Text>
                <Text > {product.brand} </Text>
                <Text fontSize={[10, 10, 12]} > {product.description} </Text>
                <VStack fontSize={[10, 10, 12]}>
                    <Flex w={'100%'} py={'10px'} gap={'10px'} bg={'#ccc'}>
                        <Link to={"#"}>Rating : {Math.floor(Math.random() * (5 - 1) + 1)}/5 </Link>
                        <Link to={"#"}>Review : {Math.floor(Math.random() * (50000 - 1) + 1)}</Link>
                        <Link to={"#"}>Ask a question</Link>
                    </Flex>
                    <Flex w={'100%'}>
                        <Text>Highly rated by customer for: </Text>
                        <Link to={"#"}> satisfiction </Link>
                        <Link to={"#"}> smell </Link>
                        <Link to={"#"}> color </Link>

                    </Flex>
                </VStack>
                <Text>Price : {product.price_sign || '$'} {product.price}</Text>
                <Text>Color : {product?.product_colors?.[0]?.colour_name}</Text>
                <Box>
                    <Text>Standard size : {Math.floor(Math.random() * (100 - 10) + 10)}gm</Text>
                    <Flex>
                        {
                            product?.product_colors?.map((color, index) => {
                                // console.log(color?.hax_value);
                                return <Box key={index} bg={color.hex_value} width={"40px"} height={'40px'} m={'2px'} cursor={'pointer'}>
                                </Box>
                            })
                        }
                    </Flex>
                </Box>
            </Box>
        </Flex>
    )
}
