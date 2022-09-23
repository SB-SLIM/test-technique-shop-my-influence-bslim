import useStaticImages from "hooks/useStaticImages";
import React from "react";
import { Avatar, Icon } from "ui-components";
import style from "./sidebar.module.css";
import { itemsInit } from "./navLinkSource";
import Nav from "./components";
import { useDispatch, useSelector } from "react-redux";

import clsx from "clsx";
import { selectTheme } from "Redux/Theme/theme.slice";
import {
  selectSideBar,
  setSideBarOpen,
} from "Redux/ElementsState/sideBar.slice";
import { IconButton } from "@mui/material";

function SideBar() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector(selectSideBar);

  const images = useStaticImages();

  const handleClickSideBar = (e) => {
    dispatch(setSideBarOpen());
  };

  return (
    <div className={clsx(style.sidebarRoot, isOpen && style.sidebarOpen)}>
      <div className={style.sidebarLogo} onClick={handleClickSideBar}>
        <Avatar src={images.logo} size="large" variant="square" />
      </div>
      <div className={style.sidebarNav}>
        <Nav items={itemsInit} isOpen={isOpen} />
      </div>
      <IconButton
        sx={{ boxShadow: 4 }}
        className={style.btnSideBar}
        bgcolor="white"
        onClick={(e) => dispatch(setSideBarOpen())}
      >
        {!isOpen ? (
          <Icon variant="arrowLeft" type="square" size="small" />
        ) : (
          <Icon variant="arrowRight" type="square" size="small" />
        )}
      </IconButton>
    </div>
  );
}

export default SideBar;
