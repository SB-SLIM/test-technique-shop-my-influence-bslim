import { Button as MUIButton } from "@mui/material";
import React from "react";
import { capitalizeFirstLetter } from "utils/capitalizeFirstLetter";

function Button({ children, ...props }) {
  return (
    <MUIButton variant="outlined" color="secondary" {...props}>
      {capitalizeFirstLetter(children)}
    </MUIButton>
  );
}

export default Button;
