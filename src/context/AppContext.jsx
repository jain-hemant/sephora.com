import { useDisclosure } from '@chakra-ui/react'
import React, { createContext } from 'react'

export const AppContext = createContext(null)

export default function AppContextProvider({ children }) {
    const { isOpen: isLoginModalOpen, onClose: onLoginModalClose, onOpen: onLoginModalOpen } = useDisclosure()
    const { isOpen: isSignupModalIsopen, onClose: onSignupModalClose, onOpen: onSignupModalOpen } = useDisclosure()

    function hanldeOnSignUpModalOpen() {
        onLoginModalClose()
        onSignupModalOpen()
    }
    return (
        <AppContext.Provider value={{ isLoginModalOpen, isSignupModalIsopen, onLoginModalClose, onSignupModalClose, onLoginModalOpen, onSignupModalOpen: hanldeOnSignUpModalOpen }}>
            {children}
        </AppContext.Provider>
    )
}
