import { Typography } from "@mui/material";
import React from "react";
import { Avatar } from "ui-components";
import style from "./profile.module.css";

function Profile({ img, name }) {
  return (
    <div className={style.profileRoot}>
      <div className={style.profileLeft}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }} color="primary">
          {name.toUpperCase()}
        </Typography>
        <Typography variant="subtitle">Profile</Typography>
      </div>
      <div className={style.profileRight}>
        <Avatar size="large" src={img} />
      </div>
    </div>
  );
}

export default Profile;
