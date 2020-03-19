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

const Container = styled.main`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  position: relative;
`;

const Footer = styled.footer`
  font-family: "Roboto Mono";
  text-align: center;
  position: relative;
  z-index: 10;
`;

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <Navbar siteTitle={"Developer Deep Dives"} />
      <Container>
        {children}
        <Footer>
          &copy; {new Date().getFullYear()}, Built with{" "}
          <a target="_blank" href="https://nextjs.org">
            Next.JS
          </a>
        </Footer>
      </Container>
    </div>
  );
};

export default Layout;
