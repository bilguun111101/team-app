import {
  List,
  ListItem,
  Button,
  ListItemButton,
  CardMedia,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarBtns from "./NavbarBtn.json";
import logo from "../../image/team..png";
import { styles } from "./NavbarStyle";
import NavbarBtn from "./NavbarBtn";
import { useState } from "react";
import Link from "next/link";
import _ from "lodash";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const [openNavbar, setOpenNavbar] = useState(false);
  return (
    <List sx={styles.navbarSection}>
      <Link href="/">
        <Button>
          <CardMedia
            component="img"
            image={logo.src}
            sx={{ width: "87px", height: "auto" }}
          />
        </Button>
      </Link>
      <List sx={styles.btns}>
        {_.map(NavbarBtns, (el, idx) => (
          <NavbarBtn key={idx} data={el} />
        ))}
      </List>
      <List sx={openNavbar ? styles.SecondBtns : styles.SecondBtnsNone}>
        {_.map(NavbarBtns, (el, idx) => (
          <NavbarBtn key={idx} data={el} />
        ))}
      </List>
      <Button onClick={() => setOpenNavbar(!openNavbar)} sx={styles.bar}>
        {openNavbar ? (
          <CloseIcon sx={{ color: "#FFF" }} />
        ) : (
          <MenuIcon sx={{ color: "#FFF" }} />
        )}
      </Button>
    </List>
  );
};

export default Navbar;
