import { Avatar, Box, Card, CardMedia, Typography } from "@mui/material";
import { useDetailContext } from "../../../context/detailsContext";
import { styles } from "./ContainerStyle";
import { useRouter } from "next/router";

const ContainerSection = (props) => {
  const propsy = props.data;
  const router = useRouter();
  const { setDetail } = useDetailContext();
  return (
    <Card
      sx={styles.cardSection}
      onClick={() => {
        router.push("/detail");
        setDetail(propsy);
      }}
    >
      <CardMedia component="img" image={propsy.image} />
      <Box sx={styles.documentSection}>
        <Typography variant="h6">{propsy.text}</Typography>
        <Box sx={styles.write}>
          <Typography variant="p" sx={{ fontSize: "14px" }}>
            tags: {propsy.tags}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <Avatar alt={propsy.owner.firstName} src={propsy.owner.picture} />
          <Typography variant="p" sx={styles.greyWord}>
            {`${propsy.owner.firstName} ${propsy.owner.lastName}`}
          </Typography>
          <Typography variant="p" sx={styles.greyWord}>
            |
          </Typography>
          <Typography variant="p" sx={styles.greyWord}>
            {propsy.publishDate}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default ContainerSection;
