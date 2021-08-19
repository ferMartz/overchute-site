import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { responsiveFontSizes, ThemeProvider } from "@material-ui/core/styles";
import App from "./App";
import ThemeOver from "./assets/theme/index";

const theme = responsiveFontSizes(ThemeOver);

ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.Fragment>
  </React.StrictMode>,
  document.getElementById("root")
);
