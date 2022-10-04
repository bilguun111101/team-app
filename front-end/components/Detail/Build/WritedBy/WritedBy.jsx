import { Box, Avatar, Typography } from "@mui/material";
import { style } from "./WritedByStyle";

const WritedBy = (props) => {
  const detail = props.data;
  return (
    <Box sx={style.writedBySection}>
      <Avatar src={detail.owner.picture} />
      <Box sx={style.avatarAndName}>
        <Typography variant="p" sx={style.name}>
          Written by
        </Typography>
        <Typography variant="p" sx={{ fontSize: "17px", color: "#000" }}>
          {`${detail.owner.firstName} ${detail.owner.lastName}`}
        </Typography>
        <Typography variant="p" sx={style.name}>
          CEO Team App
        </Typography>
      </Box>
    </Box>
  );
};

export default WritedBy;
