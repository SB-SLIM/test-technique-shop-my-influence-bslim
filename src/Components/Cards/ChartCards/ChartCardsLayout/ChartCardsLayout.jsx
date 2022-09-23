import { CardContent, CardHeader } from "@mui/material";
import React from "react";
import { MuiRouterLink, Title } from "ui-components";
import { capitalizeFirstLetter } from "utils/capitalizeFirstLetter";
import "./styles.css";

function ChartCardsLayout({ title, children }) {
  return (
    <>
      {title && (
        <CardHeader
          className="items-center"
          title={title && capitalizeFirstLetter(title)}
          action={<MuiRouterLink>see more</MuiRouterLink>}
        ></CardHeader>
      )}
      <CardContent className="flex justify-center items-center">
        {children}
      </CardContent>
    </>
  );
}

export default ChartCardsLayout;
