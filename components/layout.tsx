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

const Footer = styled.footer<{ hideFade?: boolean }>`
  font-family: "Roboto Mono";
  text-align: center;
  position: relative;
  z-index: 10;

  ${props =>
    !props.hideFade
      ? `&:after {
      z-index: 5;
      content: "";
      position: absolute;
      display: block;
      height: 200px;
      top: -150px;
      left: -15px;
      width: 110px;
      background: linear-gradient(to bottom, #2a2e3800 0%, #2a2e38ff 100%);

      @media screen and (max-width: 1000px) {
        width: 40px;
      }
    }`
      : ""}
`;

interface Props {
  hideFade?: boolean;
}

const Layout: React.FC<Props> = ({ children, hideFade }) => {
  return (
    <div>
      <GlobalStyle />
      <Navbar siteTitle={"Developer Deep Dives"} />
      <Container>
        {children}
        <Footer hideFade={hideFade}>
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
