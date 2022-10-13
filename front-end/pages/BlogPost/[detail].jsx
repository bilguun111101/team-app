import { Box, List, Typography } from "@mui/material";
import { styles } from "./Detail/DetailStyle";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import Chat from "./Detail/Chat";
import _ from "lodash";
import Image from "./Detail/Build/Image/Image";
import WritedBy from "./Detail/Build/WritedBy/WritedBy";
import HeaderDate from "./Detail/Build/HeaderDate/HeaderDate";
import CommentInput from "./Detail/Build/commentInput.jsx/CommentInput";

import { instance } from "../../customHook/instance";
import { useEffect } from "react";

const Detail = () => {
  const [chats, setChats] = useState([]);
  const [detail, setDetail] = useState({});
  const chat = useRef(null);
  const router = useRouter();
  const path = router.query.detail;

  const sendChat = () => {
    setChats([...chats, chat.current.value]);
    chat.current.value = "";
  };

  useEffect(() => {
    (async () => {
      await instance.get(`/posts/${path}`).then(res => setDetail(res.data[0]))
    })()
  }, [])

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
