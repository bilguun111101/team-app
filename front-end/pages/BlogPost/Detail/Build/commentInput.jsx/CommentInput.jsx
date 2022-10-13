import { Box, Avatar, Typography, TextField, Button } from "@mui/material";
import { style } from "./CommentinputStyle";

const CommentInput = (props) => {
  return (
    <Box sx={{ width: "90%", gap: "1em" }}>
      <Typography variant="p" sx={style.name}>
        Join the coversation
      </Typography>
      <Box sx={style.chatInput}>
        <Avatar />
        <TextField
          sx={{ width: "100%" }}
          placeholder="Comments"
          inputRef={props.inputRef}
        />
      </Box>
      <Button sx={style.sendButton} onClick={props.onClick}>
        Send
      </Button>
    </Box>
  );
};

export default CommentInput;
