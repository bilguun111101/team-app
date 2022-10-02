import { Avatar, Box, Card, CardMedia, Link, Typography } from "@mui/material";
import { styles } from "./ContainerStyle";
import { useRouter } from "next/router";
import img from "./Rectangle.png";

const ContainerSection = props => {
  const propsy = props.data;
  const router = useRouter();
  return (
    <Card sx={styles.cardSection} onClick={() => router.push("/detail")}>
        <CardMedia component="img" image={img.src} />
        <Box sx={styles.documentSection}>
            <Typography variant="h6">The Emotional Toll of Being in UX</Typography>
            <Box sx={styles.write}>
                <Typography variant="p" sx={{ fontSize: "14px" }} >There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand</Typography>
            </Box>
            <Box sx={{ display: "flex", width: "100%", gap: "10px", alignItems: "center" }}>
                <Avatar />
                <Typography variant="p" sx={styles.greyWord}>Darlene Robert</Typography>
                <Typography variant="p" sx={styles.greyWord}>|</Typography>
                <Typography variant="p" sx={styles.greyWord}>2nd january 2022</Typography>
            </Box>
        </Box>
    </Card>
  )
}

export default ContainerSection;