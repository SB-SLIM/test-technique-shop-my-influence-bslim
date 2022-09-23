import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import "./navItem.module.css";
import clsx from "clsx";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";

function NavItem({ to, label, icon }) {
  const resolved = useResolvedPath(to);

  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <ListItem
      component={NavLink}
      activeClassName={".active"}
      sx={{ color: "text.primary" }}
      to={to}
    >
      <ListItemIcon sx={{ color: "text.primary" }}>{icon}</ListItemIcon>
      {/* <ListItemText primary={label} /> */}
    </ListItem>
  );
}

export default NavItem;
