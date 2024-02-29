import { Flex, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import LoginModal from '../modal/LoginModal'

export default function Login() {
    const { isOpen, onClose, onOpen } = useDisclosure()
    return (
        <Flex>
            <button onClick={onOpen}>
                Login
            </button>

        </Flex>
    )
}
