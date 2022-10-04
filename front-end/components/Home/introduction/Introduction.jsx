import { styles } from "./introductionStyle";
import {
  Box,
  Button,
  TextField,
  Container,
  Typography,
} from "@mui/material";

const Introduction = () => {
  return (
    <Box sx={styles.introduction}>
      <Box sx={styles.womanSection}>
        <Container component="div" sx={styles.introductionDocuments}>
          <Typography variant="h1" sx={styles.title}>
            Instant collaborations for remote teams
          </Typography>
          <Typography variant="h5" sx={styles.explain}>
            All in one for your remote team chats collaboratin and track project
          </Typography>
          <Typography variant="div" sx={styles.inputs}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              color="success"
              sx={{ color: "#000", backgroundColor: "#FFF" }}
            />
            <Button variant="contained" sx={{ fontSize: "10px" }}>
              Get early access
            </Button>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Introduction;
