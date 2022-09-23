import { useTheme } from "@emotion/react";

const useColors = () => {
  const theme = useTheme();
  const listColors = {
    default: theme.palette.text.primary.main,
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    secondaryDark: theme.palette.secondary.dark,
    casablanca: theme.palette.casablanca.main,
    casablancaLight: theme.palette.casablanca.light,
    blueRibbon: theme.palette.blueRibbon.main,
  };

  return listColors;
};

export default useColors;
