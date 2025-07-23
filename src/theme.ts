// src/theme.ts
import { createTheme } from "@mui/material/styles";

import { pxToRem } from "./utils";
import { colors } from "./styles/colors";

const theme = createTheme({
  palette: {
    mode: "light",
    text: {
      primary: colors.text,
      secondary: colors.gray,
    },
    background: {
      default: colors.white,
    },
    primary: {
      main: colors.variants,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.button,
    },
  },
  typography: {
    fontFamily: `"Open sans", sans-serif`,
    allVariants: {
      textAlign: "center",
    },
    h1: {
      fontWeight: 600,
      color: colors.white,
      fontSize: `${pxToRem(40)}`,
    },
    h2: {
      fontWeight: 500,
      color: colors.text,
      fontSize: `${pxToRem(40)}`,
    },
    subtitle1: {
      fontWeight: 400,
      color: colors.white,
      fontSize: `${pxToRem(16)}`,
    },
  },
  shape: {
    borderRadius: `${pxToRem(8)}`,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          color: colors.text,
          textWrap: "nowrap",
          width: "fit-content",
          textTransform: "none",
          height: `${pxToRem(50)}`,
          fontSize: `${pxToRem(16)}`,
          minWidth: `${pxToRem(175)}`,
          backgroundColor: colors.button,
          padding: `${pxToRem(14)} ${pxToRem(40)}`,
        },
        outlined: {
          backgroundColor: "transparent",
        },
        text: {
          border: "none",
          backgroundColor: "transparent",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "100% !important",
          minWidth: "100%",
          minHeight: "100vh",
          width: "fit-content",
          height: "fit-content",
          padding: "0 !important",
          background: colors.white,
        },
      },
    },
  },
});

export default theme;
