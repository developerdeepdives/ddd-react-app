import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 200px;
  justify-content: space-around;
`;

const PageNotFound = () => {
  return (
    <Layout>
      <ErrorWrapper>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn't exist... the sadness.</p>
      </ErrorWrapper>
    </Layout>
  );
};

export default PageNotFound;
