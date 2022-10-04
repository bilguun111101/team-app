import { Box } from "@mui/material";
import Introduction from "./introduction/Introduction";
import YourHub from "./yourHub/YourHub";
import SimpleTask from "./SimpleTask/SimpleTask";
import Scheduling from "./scheduling/Scheduling";
import SayAboutUs from "./sayAboutUs/SayAboutUs";

const HomePage = () => {
  return (
    <Box>
      <Introduction />
      <YourHub />
      <SimpleTask />
      <Scheduling />
      <SayAboutUs />
    </Box>
  )
}

export default HomePage