import { Typography } from "@mui/material";
import React from "react";
import { Button, Icon, Title } from "ui-components";
import style from "./headerFilter.module.css";
function HeaderFilter() {
  return (
    <div className={style.headerFilterRoot}>
      <div className={style.headerFilterLeft}>
        <Title>Summary dashboard: Drop Fact</Title>
      </div>
      <div className={style.headerFilterRight}>
        <div className={style.headerActionLeft}>
          <Button>customize a period</Button>
          <Button>select a period</Button>
        </div>
        <div className={style.headerActionRight}>
          <Typography variant="subtitle" color="secondary">
            Period
          </Typography>
          <Button startIcon={<Icon variant="calendar" />}>Tout</Button>
        </div>
      </div>
    </div>
  );
}

export default HeaderFilter;
