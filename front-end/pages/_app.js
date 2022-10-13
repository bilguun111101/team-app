import "./styles.css";
import "../styles/globals.css";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import UsedBy from "../components/usedBy/UsedBy";

function MyApp({ Component, pageProps }) {
  return (
      <Box>
        <Navbar />
        <Component {...pageProps} />
        <UsedBy />
      </Box>
  );
}

export default MyApp;
