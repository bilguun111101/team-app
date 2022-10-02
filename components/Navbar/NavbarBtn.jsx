import { ListItem, Button, ListItemButton } from "@mui/material"
import Link from "next/link";

const NavbarBtn = props => {
  const propsy = props.data;
  return (
    <ListItem>
      <Link href={propsy.path}>
          <Button sx={{ color: "#FFF" }}>{propsy.name}</Button>
      </Link>
    </ListItem>
  )
}

export default NavbarBtn