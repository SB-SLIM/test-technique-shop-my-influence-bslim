import useStaticImages from "hooks/useStaticImages";
import React from "react";
import { Avatar } from "ui-components";
import style from "./sidebar.module.css";
import { itemsInit } from "./navLinkSource";
import Nav from "./components";

function SideBar() {
  const images = useStaticImages();
  return (
    <div className={style.sidebarRoot}>
      <div className={style.sidebarLogo}>
        <Avatar src={images.logo} size="large" variant="square" />
      </div>
      <div className={style.sidebarNav}>
        <Nav items={itemsInit} isVertical />
      </div>
    </div>
  );
}

export default SideBar;
