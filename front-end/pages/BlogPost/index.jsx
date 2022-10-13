import ContainerSection from "./Container/Container";
import { instance } from "../../customHook/instance";
import { Box, Typography } from "@mui/material";
import { styles } from "./BlogStyle";
import { useEffect } from "react";
import { useState } from "react";
import _ from "lodash";


const BlogPost = () => {
  const [saveData, setSaveData] = useState();
  useEffect(() => {
    (async () => {
      await instance.get("/posts").then((res) => setSaveData(res.data.data));
    })()
  }, [])
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
