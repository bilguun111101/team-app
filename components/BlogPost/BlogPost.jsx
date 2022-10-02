import ContainerSection from "./Container/Container";
import { Box, Typography, Card, CardMedia, Avatar } from "@mui/material";
import img from "../BlogPost/Container/Rectangle.png";
import { styles } from "./BlogStyle";
import _ from "lodash"

const BlogPost = () => {
    const array = Array.from(Array(10).keys());
    console.log(array);
    return (
        <Box sx={styles.blogPostPage}>
          <Box>
            <Typography variant="h3" sx={{ color: "#000", fontWeight: "10" }}>Blog posts</Typography>
            <Typography variant="p" sx={styles.introduction}>Our latest updates and blogs about managing your team</Typography>
            <Box sx={styles.containerSection}>
                {_.map(array, (el, idx) => <ContainerSection key={idx}/>)}
            </Box>
          </Box>
        </Box>
  )
}

export default BlogPost