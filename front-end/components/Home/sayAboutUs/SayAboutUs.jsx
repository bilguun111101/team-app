import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import PersonSayAbout from './PersonSayAbout/PersonSayAbout';
import { styles } from "./SayAboutUsStyle";
import peopleData from "./PeopleData.json";
import { Box, Button, Typography } from "@mui/material";

const SayAboutUs = () => {
  return (
    <Box sx={styles.sayAboutUsSection}>
        <Typography variant="div" sx={styles.titleSection}>
            <Typography variant="h1" sx={styles.title}>What people say about us</Typography>
        </Typography>
        <Box sx={styles.peopleSection}>
          {peopleData.map((el, idx) => <PersonSayAbout key={idx} data={el} />)}
        </Box>
        <Box sx={{ marginTop: "2em", width: "100%", display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={() => {}}>
                <ArrowRightAltIcon />
            </Button>
        </Box>
    </Box>
  )
}

export default SayAboutUs