import React from "react";
import styled from "styled-components";
import Typing from "react-typist";
import Layout from "../../components/layout";
import { AuthProps } from "../../hoc/privatePage";
import Cookie from "js-cookie";
import axios from "../../utils/axios";
import { GetServerSideProps } from "next";
import { AuthToken } from "../../utils/authToken";

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userId = context.params.id;
  const response = await axios.get(`/user/${userId}`);
  const userInfo = response.data;
  return {
    props: {
      userInfo,
    },
  };
};

interface Props extends AuthProps {
  userInfo: any;
}

const Home: React.FC<Props> = (props) => {
  console.log(props);
  const auth = new AuthToken(Cookie.get("token"));
  console.log(auth);
  const { userInfo } = props;
  return (
    <Layout pageName="Profile">
      <Header>
        <Icon>
          {"<"}
          <Blue>/</Blue>
          {">"}
        </Icon>
        <Lead>
          <Typing>Profile...</Typing>
        </Lead>
      </Header>
      <div>
        <h1>{userInfo.name}</h1>
        <h1>{userInfo.email}</h1>
        <h1>{userInfo.bio}</h1>
        <h1>
          {userInfo._id} - {auth.decodedToken?.user?._id}
        </h1>
      </div>
    </Layout>
  );
};

export default Home;
