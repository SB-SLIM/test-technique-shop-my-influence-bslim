import { Avatar as MUIAvatar } from "@mui/material";
import useColors from "hooks/useColors";
import React from "react";

function Avatar({ children, color, variant, size = "medium", src }) {
  const listColors = useColors();
  const bgcolorTmp = `${listColors[color]}3F` || "transparent";

  const sizes = {
    small: { width: "20px", height: "20px" },
    medium: { width: "24px", height: "24px" },
    large: { width: "56px", height: "56px" },
  };

  return (
    <MUIAvatar
      sx={{ bgcolor: bgcolorTmp, ...sizes[size] }}
      variant={variant}
      src={src}
    >
      {children}
    </MUIAvatar>
  );
}

export default Avatar;
