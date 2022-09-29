import {
  Box,
  Input,
  AppBar,
  Button,
  TextField,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { styles } from "./YourHubStyle";
import meet from "../../../image/meet.png";

const YourHub = () => {
  return (
    <Box sx={styles.yourHubSection}>
      <Typography variant="div" sx={styles.yourHubDocument}>
        <Typography
          variant="h1"
          color="primary"
          sx={styles.yourHubSmallDocument}
        >
          Your Hub for teamwork
        </Typography>
        <Typography variant="h6" color="primary">
          Give everyone you work with—inside and outside your company—a more
          productive way to stay in sync. Respond faster with emoji, keep
          conversations focused in channels, and simplify all your communication
          into one place.
        </Typography>
        <Button
          sx={{
            width: "150px",
            marginTop: "3em",
            justifyContent: "flex-start",
          }}
        >
          Learn more
        </Button>
      </Typography>
      <Typography variant="div" sx={styles.imageSection}>
        <Image src={meet} />
      </Typography>
    </Box>
  );
};

export default YourHub;
