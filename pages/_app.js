import '../styles/globals.css'
import { Box } from '@mui/material'
import Navbar from "../components/Navbar/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <Box>
      <Navbar />
      <Component {...pageProps} />
    </Box>
  )
}

export default MyApp
