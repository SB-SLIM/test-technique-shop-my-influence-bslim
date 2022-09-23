import React from "react";
import { Title } from "ui-components";
import style from "./dashboardSectionLayout.module.css";

function DashboardSectionLayout({ children, title }) {
  return (
    <div className={style.dashSectionRoot}>
      <div className={style.dashSectionHeader}>
        <Title type="title2">{title}</Title>
      </div>
      <div className={style.dashSectionBody}>{children}</div>
    </div>
  );
}

export default DashboardSectionLayout;
