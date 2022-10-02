import { styles } from "./PersonSayAboutStyle"
import { Card, Box, Rating, Typography, Avatar } from "@mui/material"

const PersonSayAbout = props => {
  const propsy = props.data;
  return (
    <Card sx={styles.personSection}>
        <Box sx={{ marginBottom: "1em" }}>
            <Rating name="read-only" value={propsy.rate} readOnly />
        </Box>
        <Typography variant='div' sx={styles.details}>
            <Typography variant='p'>{propsy.details}</Typography>
        </Typography>
        <Box sx={styles.avatarSection}>
            <Avatar alt="Remy Sharp" src={propsy.img} />
            <Typography variant='h6'>{propsy.name}</Typography>
        </Box>
    </Card>
  )
}

export default PersonSayAbout