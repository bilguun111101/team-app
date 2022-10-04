import { ListItem, ListItemText, ListItemAvatar } from "@mui/material";

const styles = {
  text: (theme) => ({
    color: "#000",
  }),
};

const Chat = (props) => {
  const propsy = props.text;
  return (
    <ListItem>
      <ListItemAvatar />
      <ListItemText primary={propsy} sx={styles.text} />
    </ListItem>
  );
};

export default Chat;
