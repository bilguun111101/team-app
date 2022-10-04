import { Box, Typography } from "@mui/material";
import useGetDataFromApi from "../../customHook/GetDataFromApi";
import ContainerSection from "./Container/Container";
import { styles } from "./BlogStyle";
import _ from "lodash";

const BlogPost = () => {
  const saveData = useGetDataFromApi("http://localhost:8000/users");
  return (
    <Box sx={styles.blogPostPage}>
      <Box>
        <Typography variant="h3" sx={{ color: "#000", fontWeight: "10" }}>
          Blog posts
        </Typography>
        <Typography variant="p" sx={styles.introduction}>
          Our latest updates and blogs about managing your team
        </Typography>
        <Box sx={styles.containerSection}>
          {_.map(saveData, (el, idx) => (
            <ContainerSection key={idx} data={el} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BlogPost;
