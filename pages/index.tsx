import React from "react";
import styled from "styled-components";
import Typing from "react-typist";
import axios from "axios";
import { GetServerSideProps } from "next";
import Layout from "../components/layout";
import Event, { Meetup } from "../components/event";
import Numbers from "../components/numberLine";

const Header = styled.header`
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
  max-width: 600px;
  min-width: 600px;
  margin: 0;
  min-height: 104px;
`;

const Upcoming = styled.h2`
  font-family: "Roboto Mono";
  color: #666;
  margin: auto;
  text-align: center;
  font-weight: 400;
`;

export const getServerSideProps: GetServerSideProps = async context => {
  const data = (
    await axios.get(
      "https://api.meetup.com/developerdeepdives/events?status=upcoming"
    )
  ).data;
  return {
    props: {
      meetup: data[0]
    }
  };
};

interface Props {
  meetup: Meetup;
}

const Home: React.FC<Props> = ({ meetup }) => {
  return (
    <Layout>
      <Header>
        <Icon>
          {"<"}
          <Blue>/</Blue>
          {">"}
        </Icon>
        <Lead>
          <Typing>Meet Other Developers On Long Island.</Typing>
        </Lead>
      </Header>
      <Upcoming>{meetup ? "next_event:" : "no_scheduled_meetup"}</Upcoming>
      {meetup && (
        <>
          <Numbers />
          <Event meetup={meetup} />
        </>
      )}
    </Layout>
  );
};

export default Home;
