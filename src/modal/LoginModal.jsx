import { Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import React from 'react'

export default function LoginModal({ isOpen, onClose }) {
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    return (
        <Flex>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Sign In</ModalHeader>
                    <Text>Sign in or create an account to enjoy FREE standard shipping on all orders.</Text>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            {/* <FormLabel>First name</FormLabel> */}
                            <Input ref={initialRef} placeholder='Email Address' />
                        </FormControl>

                        <FormControl mt={4}>
                            {/* <FormLabel>Last name</FormLabel> */}
                            <Input type='password' placeholder='Password' />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    )
}
