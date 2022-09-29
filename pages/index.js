import Head from "next/head";
import Image from "next/image";
import background from "./image/homeWoman.png";
import {
  Box,
  Input,
  AppBar,
  Button,
  TextField,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import Introduction from "./components/Home/introduction/Introduction";
import YourHub from "./components/Home/yourHub/YourHub";
import SimpleTask from "./components/Home/SimpleTask/SimpleTask";

export default function Home() {
  return (
    <Box>
      <Introduction />
      <YourHub />
      {/* <SimpleTask /> */}
    </Box>
  );
}
