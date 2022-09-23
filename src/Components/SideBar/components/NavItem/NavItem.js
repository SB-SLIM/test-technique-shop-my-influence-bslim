import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import "./navItem.css";
import clsx from "clsx";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSideBar,
  setSideBarOpen,
} from "Redux/ElementsState/sideBar.slice";
import themeReducer from "Redux/Theme";

function NavItem({ to, label, icon }) {
  const dispatch = useDispatch();
  const resolved = useResolvedPath(to);
  const { isOpen } = useSelector(selectSideBar);
  const match = useMatch({ path: resolved.pathname, end: true });

  const handleClickSideBar = (e) => {
    if ((isOpen && match) || !isOpen) {
      dispatch(setSideBarOpen());
    }
  };

  return (
    <ListItem
      onClick={handleClickSideBar}
      component={NavLink}
      activeClassName={({ isActive }) =>
        isActive && match ? "active" : undefined
      }
      xs={{ color: "text.primary" }}
      to={to}
    >
      <ListItemIcon className="justify-center p-3 ">{icon}</ListItemIcon>

      {isOpen && (
        <Typography
          variant="button"
          color="text.primary"
          className="listItemTest"
        >
          {label}
        </Typography>
      )}
    </ListItem>
  );
}

export default NavItem;
