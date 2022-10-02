import { List, ListItem, Button, ListItemButton, CardMedia } from "@mui/material"
import NavbarBtns from "./NavbarBtn.json";
import logo from "../../image/team..png";
import { styles } from "./NavbarStyle"
import NavbarBtn from "./NavbarBtn";
import { useState } from "react";
import Link from "next/link";
import _ from "lodash";

const Navbar = () => {
  const [color, setColor] = useState(false);
  return (
    // <List sx={!color ? styles.navbarSectionTrans : styles.navbarSection}>
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
          {_.map(NavbarBtns, (el, idx) => <NavbarBtn key={idx} data={el} />)}
        </List>
    </List>
  )
}

export default Navbar