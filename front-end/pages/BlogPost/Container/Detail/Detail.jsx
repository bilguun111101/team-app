import { useDetailContext } from "../../../context/detailsContext";
import { Box, List, Typography } from "@mui/material";
import { useState, useRef } from "react";
import { styles } from "./DetailStyle";
import Chat from "./Chat";
import _ from "lodash";
import Image from "./Build/Image/Image";
import WritedBy from "./Build/WritedBy/WritedBy";
import HeaderDate from "./Build/HeaderDate/HeaderDate";
import CommentInput from "./Build/commentInput.jsx/CommentInput";

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

      <HeaderDate data={detail} />

      <Image image={detail.image} />

      <WritedBy data={detail} />

      <Typography variant="div" sx={styles.dash} />

      <CommentInput inputRef={chat} onClick={sendChat} />

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
