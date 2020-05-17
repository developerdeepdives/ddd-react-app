import React from "react";
import styled from "styled-components";
import Typing from "react-typist";
import Layout from "../components/layout";
import RegisterForm from "../components/registerForm";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  justify-content: center;
`;

const Icon = styled.div`
  font-size: 120px;
  color: #ff4141;
  user-select: none;
`;

const Blue = styled.span`
  color: #15dcd1;
`;

const Lead = styled.h1`
  font-size: 48px;
  font-weight: 400;
  margin: 0;

  @media screen and (max-width: 800px) {
    margin: 15px;
    min-width: 0;
  }
`;

const Home: React.FC = () => {
  return (
    <Layout pageName="Register">
      <Header>
        <Icon>
          {"<"}
          <Blue>/</Blue>
          {">"}
        </Icon>
        <Lead>
          <Typing>Register...</Typing>
        </Lead>
      </Header>
      <RegisterForm />
    </Layout>
  );
};

export default Home;
