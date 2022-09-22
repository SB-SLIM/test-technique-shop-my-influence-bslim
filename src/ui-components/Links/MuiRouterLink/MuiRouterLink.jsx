import React from "react";
import { Link as MUILink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@emotion/react";

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
      {children}
    </MUILink>
  );
}

export default MuiRouterLink;
