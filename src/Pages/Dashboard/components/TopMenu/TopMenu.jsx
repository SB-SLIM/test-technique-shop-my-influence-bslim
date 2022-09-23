import { Box } from "@mui/material";
import { Profile } from "Components";
import React from "react";
import style from "./topMenu.module.css";

function TopMenu({ user }) {
  return (
    <Box className={style.topMenuRoot}>
      <Profile {...user} />
    </Box>
  );
}

export default TopMenu;
