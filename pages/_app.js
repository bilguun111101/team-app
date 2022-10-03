import "../styles/globals.css";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import UsedBy from "../components/usedBy/UsedBy";
import { DetailContextProvider } from "../context/detailsContext";

function MyApp({ Component, pageProps }) {
  return (
    <DetailContextProvider>
      <Box>
        <Navbar />
        <Component {...pageProps} />
        <UsedBy />
      </Box>
    </DetailContextProvider>
  );
}

export default MyApp;
