const rootElement = document.getElementById("root");

export const getDesignTokens = (mode) => ({
  palette: {
    primary: {
      main: "#032958",
    },
    secondary: {
      main: "#ff5f5f",
      dark: "#FF2727",
      contrastText: "#fff",
    },
    casablanca: {
      main: "#F2980E",
      light: "#f5af43",
    },
    blueRibbon: {
      main: "#0460FE",
    },
    text: {
      ...(mode === "light"
        ? { primary: "#5e5874" }
        : {
            primary: "#fff",
          }),
    },
    background: {
      default: "#f8f8f8",
    },
  },
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          textTransform: "none",
        },
      },
    },
  },
});
