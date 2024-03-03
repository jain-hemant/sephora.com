import { Box } from "@chakra-ui/react"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import AppRoutes from "./pages/AppRoutes"
import ApiContextProvider from "./context/ApiContext"
function App() {

  return (
    <Box w={"100%"} boxSizing="border-box">
      <AppRoutes />
    </Box>
  )
}

export default App
