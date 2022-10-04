import { Box, Typography, Card, CardMedia, Avatar } from "@mui/material";
import useGetDataFromApi from "../../customHook/GetDataFromApi";
import img from "../BlogPost/Container/Rectangle.png";
import ContainerSection from "./Container/Container";
import { styles } from "./BlogStyle";
import { useEffect } from "react";
import _ from "lodash";
import axios from "axios";

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
