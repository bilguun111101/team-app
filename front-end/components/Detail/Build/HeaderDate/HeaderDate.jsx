import { Box, Avatar, Typography } from "@mui/material";
import { style } from "./HeaderStyle";

const HeaderDate = (props) => {
  const detail = props.data;
  return (
    <Box sx={style.date}>
      <Avatar alt={detail.owner.firstName} src={detail.owner.picture} />
      <Typography variant="p" sx={style.name}>
        {`${detail.owner.firstName} ${detail.owner.lastName}`}
      </Typography>
      <Typography variant="p" sx={style.name}>
        |
      </Typography>
      <Typography variant="p" sx={style.name}>
        {detail.publishDate}
      </Typography>
    </Box>
  );
};

export default HeaderDate;
