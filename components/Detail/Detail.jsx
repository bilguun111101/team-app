import { Avatar, Box, CardMedia, TextField, Typography } from "@mui/material";
import { styles } from "./DetailStyle";
import img from "../BlogPost/Container/Rectangle.png";
import { useDetailContext } from "../../context/detailsContext";

const Detail = () => {
  const { detail } = useDetailContext();
  return (
    <Box sx={styles.detailPage}>
      <Typography variant="h2" sx={styles.title}>
        10 Secrets for managing a remote team{" "}
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          gap: "1.5em",
          alignItems: "center",
        }}
      >
        <Avatar />
        <Typography variant="p" sx={{ color: "#6d7d8b", fontSize: "14px" }}>
          Shedrack eze
        </Typography>
        <Typography variant="p" sx={{ color: "#6d7d8b", fontSize: "14px" }}>
          |
        </Typography>
        <Typography variant="p" sx={{ color: "#6d7d8b", fontSize: "14px" }}>
          2nd January
        </Typography>
      </Box>
      <CardMedia component="img" image={img.src} sx={{ width: "100%" }} />
      <Typography variant="p" sx={{ color: "#000", width: "90%" }}>
        If you’re thinking of starting a blog of your own, but just don’t have a
        clue on what to blog about, then fear not! In this article, I have
        included a whole load of blog examples from a wide variety of different
        niches, all run on different blogging platforms like WordPress, Joomla!
        and Drupal. Since the beginning of the internet, millions and millions
        and millions of blogs have been created. Many have died due to lost
        interest or their owners giving up on the idea, while others have
        thrived and continue to grow, making money and earning their owners a
        steady income. It’s a constant evolution of content that keeps people
        coming back for more, especially if these blogs contact highly
        resourceful material that people find useful and interesting. Each
        example listed in this blog post are all different in some way and all
        bring something unique to their readers & subscribers. I want to show
        you what is possible and how you can take inspiration from them and
        create an awesome blog of your own. Some of these blogs make over $100k
        a month, others are just a hobby for their owners, but all have the same
        purpose at their core… the love of writing and sharing information. Some
        of these blogs make over $100k a month, others are just a hobby for
        their owners, but all have the same purpose at their core… the love of
        writing and Some of these blogs make over $100k a month, others are just
        a hobby for their owners, but all have the same purpose at their core…
        the love of writing and sharing information. Some of these blogs make
        over $100k a month, others are just a hobby for their owners, but all
        have the same purpose at their core… the love of writing and sharing
        information.
      </Typography>
      <Box
        sx={{ width: "90%", display: "flex", alignItems: "center", gap: "1em" }}
      >
        <Avatar />
        <Box sx={{ flexDirection: "column", display: "flex", gap: "2px" }}>
          <Typography variant="p" sx={{ color: "#000", fontSize: "13px" }}>
            Written by
          </Typography>
          <Typography variant="p" sx={{ fontSize: "17px", color: "#000" }}>
            Shedrack Eze
          </Typography>
          <Typography variant="p" sx={{ color: "#989898", fontSize: "13px" }}>
            CEO Team App
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="div"
        sx={{ height: "1px", backgroundColor: "silver", width: "90%" }}
      />
      <Box sx={{ width: "90%", gap: "1em" }}>
        <Typography variant="p" sx={{ color: "#6D7D8B" }}>
          Join the coversation
        </Typography>
        <Box
          sx={{ display: "flex", width: "100%", gap: "1em", marginTop: "1em" }}
        >
          <Avatar />
          <TextField sx={{ width: "100%" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Detail;
