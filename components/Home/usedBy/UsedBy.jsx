import { styles } from "./UsedByStyle";
import logo from "../../../image/team..png";
import { Box, CardMedia, Typography } from "@mui/material";

const UsedBy = () => {
  return (
    <Box sx={styles.usedBySection}>
        <Box>
            <Typography variant="h6" sx={{ color: "#FFF" }}>
                <CardMedia src={logo.src} />
            </Typography>
        </Box>
    </Box>
  )
}

export default UsedBy