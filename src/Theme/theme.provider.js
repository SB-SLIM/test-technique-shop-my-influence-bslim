import React from "react";
import {
  ThemeProvider as ThemeProviderMUI,
  createTheme,
} from "@mui/material/styles";
import { getDesignTokens } from "./theme";
import { selectTheme } from "../Redux/Theme/theme.slice";
import { useSelector } from "react-redux";

const ThemeProvider = (props) => {
  const { children } = props;
  const { themeMode } = useSelector(selectTheme);

  const theme = React.useMemo(
    () => createTheme(getDesignTokens(themeMode)),
    [themeMode]
  );
  return <ThemeProviderMUI theme={theme}>{children}</ThemeProviderMUI>;
};

export default ThemeProvider;
