import { Box } from "@chakra-ui/react"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import AppRoutes from "./pages/AppRoutes"
function App() {

  return (
    <Box w={"100%"} boxSizing="border-box">
      {/* <Header />
      <Navigation /> */}
      <AppRoutes />
      {/* <Footer /> */}
    </Box>
  )
}

export default App
