import NextApp from "next/app";
import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme, CssBaseline } from "@material-ui/core";
import "../app.css";
import "react-typist/dist/Typist.css";
import "@animated-burgers/burger-squeeze/dist/styles.css";

export const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#15dcd1",
    },
    secondary: {
      main: "#ffa741",
    },
  },
});
export default class App extends NextApp {
  // remove it here
  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
