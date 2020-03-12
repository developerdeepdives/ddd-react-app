import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Navbar from "./navbar";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Roboto", sans-serif;
    font-display: fallback;
    color: #DDD;
  }

  html {
    background-color: #2A2E38;
  }

  a {
    color: #15DCD1;
  }

`;

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <Navbar siteTitle={"Developer Deep Dives"} />
      {children}
    </div>
  );
};

export default Layout;
