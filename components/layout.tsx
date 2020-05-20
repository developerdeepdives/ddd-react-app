import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Navbar from "./navbar";
import Metadata from "./metadata";

const GlobalStyle = createGlobalStyle`
  --aspect-ratio:16/9;

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

const Container = styled.main<{ maxWidth: string }>`
  margin: 0 auto;
  max-width: ${(props) => props.maxWidth || "1060px"};
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  position: relative;

  @media screen and (max-width: 800px) {
    margin-top: -112px;
  }
`;

const Footer = styled.footer<{ fade?: boolean }>`
  font-family: "Roboto Mono";
  text-align: center;
  position: relative;
  z-index: 10;

  ${(props) =>
    props.fade
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
  maxWidth?: string;
  footerFade?: boolean;
  pageName: string;
}

const Layout: React.FC<Props> = ({
  children,
  footerFade,
  maxWidth,
  pageName,
}) => {
  return (
    <div>
      <GlobalStyle />
      <Metadata pageName={pageName} />
      <Navbar siteTitle={"Developer Deep Dives"} />
      <Container maxWidth={maxWidth}>
        {children}
        <Footer fade={footerFade}>
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
