import { style } from "./ImageStyle";
import { CardMedia } from "@mui/material";

const Image = (props) => {
  return <CardMedia component="img" image={props.image} sx={style.image} />;
};

export default Image;
