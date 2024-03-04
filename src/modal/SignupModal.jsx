import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { Button, Checkbox, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function SignupModal() {
    const { isSignupModalIsopen, onSignupModalClose, onLoginModalClose } = useContext(AppContext);
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    return (
        <Flex>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isSignupModalIsopen}
                onClose={onSignupModalClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            {/* <FormLabel>First name</FormLabel> */}
                            <Input ref={initialRef} placeholder='First name' />
                        </FormControl>

                        <FormControl mt={4}>
                            {/* <FormLabel>Last name</FormLabel> */}
                            <Input placeholder='Last name' />
                        </FormControl>

                        <FormControl mt={4}>
                            <Input type='email' placeholder='Email' />
                        </FormControl>

                        <FormControl mt={4}>
                            <Input type='password' placeholder='Password (6 to 12 characters)' />
                        </FormControl>
                        <FormControl mt={4}>
                            <Input placeholder='Phone Number' />
                        </FormControl>
                    </ModalBody>
                    <FormControl mt={4}>
                        <Checkbox defaultChecked>Sign me up for Sephora marketing text alerts.</Checkbox>

                    </FormControl>
                    <Flex>
                        <Text> Enter your bithday to recieve a free gift every year.</Text>

                    </Flex>
                    <FormControl w={'80%'} mt={4}>
                        <Input type='date' placeholder='Password (6 to 12 characters)' />

                    </FormControl>
                    <FormControl w={'80%'} mt={4}>
                        <Input placeholder='ZIP/Postal Code (optional)' />

                    </FormControl>
                    <Text fontSize={[10, 10, 12]}>
                        Sephora Text Alerts Disclosure: By entering your phone number,
                        checking the <b>Sign me up for Shephora marketing text alerts checkbox,</b>
                        clicking the “Join Now” button and confirming sign-up, you consent and agree to receive recurring autodialed marketing texts,
                        including abandoned cart reminders, and confirm that you have read and agree to the TEXT TERMS. Message frequency varies.
                        Consent is not a condition of purchase.
                        Message & data rates may apply. See our PRIVACY POLICY and NOTICE OF FINANCIAL INCENTIVE.
                        Text STOP to cancel at any time. HELP for help.
                        By clicking “Join Now” you acknowledge that you are a U.S. or Canada resident
                        and have read Sephora’s Privacy Policy and Notice of Financial Incentive, (2),
                        agree to TERMS OF USE, BEAUTY INSIDER TERMS, and to automatically receive Beauty Insider offers and notifications via email.

                    </Text>
                    <FormControl mt={4}>
                        <Checkbox defaultChecked>Keep me sign in</Checkbox>

                    </FormControl>
                    <ModalFooter>
                        <Button colorScheme='black' mr={3}>
                            Join Now
                        </Button>
                        <Button onClick={onSignupModalClose}>Cancel</Button>

                    </ModalFooter>
                    <Text fontSize={[10, 10, 12]}>
                        Sephora uses Google ReCaptcha and by registering,
                        users are subject to Google’s <Link>privacy policy</Link>  & <Link>terms</Link> .
                    </Text>
                </ModalContent>
            </Modal>
        </Flex>
    )
}
