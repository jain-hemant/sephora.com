import { Button, Checkbox, Flex, FormControl, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import SignupModal from './SignupModal'

export default function LoginModal({ isOpen, onClose }) {
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const { isSignupModalIsopen, onSignupModalOpen, onSignupModalClose } = useContext(AppContext);
    return (
        <>
            <Flex>
                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent >
                        <ModalHeader>Sign In</ModalHeader>
                        <Text>Sign in or create an account to enjoy FREE standard shipping on all orders.</Text>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <Flex flexDirection='column' gap={"10px"} >
                                <FormControl>
                                    {/* <FormLabel>First name</FormLabel> */}
                                    <Input ref={initialRef} placeholder='Email Address' />
                                </FormControl>

                                <FormControl mt={4}>
                                    {/* <FormLabel>Last name</FormLabel> */}
                                    <Input type='password' placeholder='Password' />
                                </FormControl>
                                <FormControl>
                                    <Flex justifyContent={"space-between"}>
                                        <Checkbox value=''>Keep me signed in </Checkbox>
                                        <Link>Forget password?</Link>
                                    </Flex>
                                </FormControl>
                                <Text fontSize={"12px"}>By clicking “Sign In”, you (1) agree to the current version of our <Link>TERMS OF USE</Link>,
                                    and (2) have read Sephora’s <Link>Privacy Policy </Link>
                                </Text>
                                <Button w={"230px"} p={"10px 0px"} borderRadius={"20px"} bg={"black"} color={"white"}>Sign In</Button>
                                <hr />
                                <Text>New To Sephora</Text>
                                <Button w={"230px"} p={"10px 0px"} borderRadius={"20px"} border={"1px solid black"} onClick={onSignupModalOpen}>Create Account</Button>
                            </Flex>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3}>
                                Save
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Flex >
            <SignupModal />
        </>
    )
}
