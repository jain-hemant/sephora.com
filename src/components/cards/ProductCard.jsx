import { Box, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
export default function ProductCard({ product }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        async function getImage() {
            try {
                const resp = await fetch(`${product.image_link}`);
                if (resp.status === 200) {
                    setIsVisible(true);
                }
                console.log(resp.status);
            } catch (error) {
                setIsVisible(false);
            }
        }

        if (product) {
            getImage()
        }
    }, [product])
    return (
        isVisible && <Box minW={"180px"} minH={"128px"} p={"5px 10px"} margin={"3px 5px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
            <Link to={`/products/${product.id}`}>
                <Image src={product.image_link} />
                <Text>{product.brand}</Text>
                <Text fontSize={[10, 10, 12]} sx={{ textWrap: "wrap" }} >{product.name}</Text>
                {/* <Text>{ }</Text> */}
                <Text>{product.price_sign || "$"} {product.price}</Text>
            </Link>

        </Box>)
}
