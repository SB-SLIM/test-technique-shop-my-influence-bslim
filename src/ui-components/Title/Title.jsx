import { Typography } from "@mui/material";
import React from "react";
import { capitalizeFirstLetter } from "utils/capitalizeFirstLetter";

function Title({ type, children }) {
  switch (type) {
    case "title1":
      return (
        <Typography variant="h4" color="primary">
          {capitalizeFirstLetter(children)}
        </Typography>
      );
    case "title2":
      return (
        <Typography variant="h5" color="primary">
          {capitalizeFirstLetter(children)}
        </Typography>
      );
    default:
      return (
        <Typography variant="h4" color="primary">
          {capitalizeFirstLetter(children)}
        </Typography>
      );
  }
}

export default Title;
