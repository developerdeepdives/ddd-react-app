import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";

const FancyDiv = styled.div`
  height: 400px;
  width: 600px;
  background-color: #666;
  color: #eee;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: tomato;
  }
`;

export default () => (
  <Layout>
    <FancyDiv>
      <h1>Developer Deep Dives</h1>
    </FancyDiv>
  </Layout>
);
