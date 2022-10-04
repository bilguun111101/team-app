import {
  Box,
  List,
  Button,
  Avatar,
  ListItem,
  CardMedia,
  TextField,
  Typography,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";
import { useDetailContext } from "../../context/detailsContext";
import { useState, useRef } from "react";
import { styles } from "./DetailStyle";
import Chat from "./Chat";
import _ from "lodash";

const Detail = () => {
  const { detail } = useDetailContext();
  const chat = useRef(null);
  const [chats, setChats] = useState([]);

  const sendChat = () => {
    setChats([...chats, chat.current.value]);
    chat.current.value = "";
  };
  return (
    <Box sx={styles.detailPage}>
      <Typography variant="h2" sx={styles.title}>
        {detail.text}
      </Typography>

      {/* person image and date */}

      <Box sx={styles.date}>
        <Avatar alt={detail.owner.firstName} src={detail.owner.picture} />
        <Typography variant="p" sx={styles.name}>
          {`${detail.owner.firstName} ${detail.owner.lastName}`}
        </Typography>
        <Typography variant="p" sx={styles.name}>
          |
        </Typography>
        <Typography variant="p" sx={styles.name}>
          {detail.publishDate}
        </Typography>
      </Box>

      {/* ************** person image and date ************* */}

      {/* image */}
      <CardMedia component="img" image={detail.image} sx={styles.image} />
      {/* *********** image --------------- */}

      <Box sx={styles.writedBySection}>
        <Avatar src={detail.owner.picture} />
        <Box sx={styles.avatarAndName}>
          <Typography variant="p" sx={styles.name}>
            Written by
          </Typography>
          <Typography variant="p" sx={{ fontSize: "17px", color: "#000" }}>
            {`${detail.owner.firstName} ${detail.owner.lastName}`}
          </Typography>
          <Typography variant="p" sx={styles.name}>
            CEO Team App
          </Typography>
        </Box>
      </Box>

      {/* Dash */}

      <Typography variant="div" sx={styles.dash} />

      {/* ********** Dash ********** */}

      {/* input chat section */}

      <Box sx={{ width: "90%", gap: "1em" }}>
        <Typography variant="p" sx={styles.name}>
          Join the coversation
        </Typography>
        <Box sx={styles.chatInput}>
          <Avatar />
          <TextField
            sx={{ width: "100%" }}
            placeholder="Comments"
            inputRef={chat}
          />
        </Box>
        <Button sx={styles.sendButton} onClick={sendChat}>
          Send
        </Button>
      </Box>

      {/* ***************** input chat section ***************** */}

      <Box sx={styles.chatOutSection}>
        <List>
          {_.map(chats, (chat, idx) => (
            <Chat text={chat} key={idx} />
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Detail;
