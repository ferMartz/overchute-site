import React from "react";
import { createTheme } from "@material-ui/core/styles";
import { grey, blueGrey } from "@material-ui/core/colors";

const ThemeOver = createTheme({
  palette: {
    type: "light",
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#16697A",
      contrast: "#fff",
    },
    secondary: {
      main: "#DB6400",
      contrast: "#fff",
    },
    text: {
      primary: blueGrey[700],
      secondary: blueGrey[400],
      disabled: grey.A200,
      hint: grey.A200,
    },
    background: {
      paper: "#fff",
      default: "#fafafa",
    },
  },
});

export default ThemeOver;
