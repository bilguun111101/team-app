import { styles } from "./SimpleTaskStyle";
import { Box, Button, Typography } from "@mui/material";
import img from "../../../image/simpleTask.png";
import Image from "next/image";

const SimpleTask = () => {
  return (
    <Box sx={styles.simpleTaskSection}>
      <Box sx={styles.documentSection}>
        <Image src={img} />
      </Box>
      <Box sx={styles.imageSection}>
        <Typography variant="h1" sx={styles.title}>
          Simple task management
        </Typography>
        <Typography variant="h5" sx={styles.text}>
          Give everyone you work with—inside and outside your company—a more
          productive way to stay in sync. Respond faster with emoji, keep
          conversations focused in channels, and simplify all your communication
          into one place.
        </Typography>
        <Button sx={{ width: "150px", justifyContent: "start" }}>
          Learn more
        </Button>
      </Box>
    </Box>
  );
};

export default SimpleTask;
