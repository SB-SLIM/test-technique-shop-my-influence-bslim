import { Icon as MUIIcon, useTheme } from "@mui/material";
import PropTypes from "prop-types";
import clsx from "clsx";
import React from "react";
import { iconList } from "./iconsSourceData";
import style from "./icon.module.css";
import useColors from "hooks/useColors";

function Icon({
  size = "small",
  color = "default",
  type = "default",
  variant,
  props,
}) {
  const listColors = useColors();

  const bgColor =
    type !== "default" && color ? `${listColors[color]}3F` : "transparent";
  const textColor = listColors[color];
  return (
    <span
      className={clsx(
        "inline-flex justify-center items-center ",
        type === "rounded" && style.iconRounded,
        type === "square" && style.iconSquare,
        size === "small" && type !== "default" && "p-4",
        size === "medium" && type !== "default" && "p-5",
        size === "large" && type !== "default" && "p-6"
      )}
      style={{ backgroundColor: bgColor }}
      {...props}
    >
      <MUIIcon
        fontSize={size}
        className="inline-flex"
        style={{ color: textColor }}
      >
        {iconList[variant]}
      </MUIIcon>
    </span>
  );
}

Icon.propTypes = {
  variant: PropTypes.oneOf(Object.keys(iconList)).isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "casablanca",
    "secondaryDark",
    "casablancaLight",
    "blueRibbon",
  ]),
  type: PropTypes.oneOf(["default", "rounded", "square"]),
};

export default Icon;
