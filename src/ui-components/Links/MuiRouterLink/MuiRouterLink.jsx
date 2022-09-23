import React from "react";
import { Link as MUILink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { capitalizeFirstLetter } from "utils/capitalizeFirstLetter";

function MuiRouterLink({ children, to, ...props }) {
  const theme = useTheme();

  return (
    <MUILink
      variant="button"
      color="inherit"
      component={RouterLink}
      to={to}
      {...props}
    >
      {capitalizeFirstLetter(children)}
    </MUILink>
  );
}

export default MuiRouterLink;
