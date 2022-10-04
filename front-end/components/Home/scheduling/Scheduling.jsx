import { styles } from "./SchedulingStyle";
import { Box, Button, Typography } from "@mui/material";
import img from "../../../image/scheduling.png"
import Image from "next/image";

const Scheduling = () => {
  return (
    <Box sx={styles.simpleTaskSection}>
      <Box sx={styles.imageSection}>
        <Typography variant="h1" sx={styles.title}>
            Scheduling that actually works
        </Typography>
        <Typography variant="h5" sx={styles.text}>
            Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.
        </Typography>
        <Button sx={{ width: "150px", justifyContent: "start" }}>
          Learn more
        </Button>
      </Box>
      <Box sx={styles.documentSection}>
        <Image src={img} />
      </Box>
    </Box>
  );
};

export default Scheduling;