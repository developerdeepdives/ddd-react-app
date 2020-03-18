import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Layout from "../components/layout";
import Typing from "react-typist";
import Event from "../components/event";
import { GetServerSideProps } from "next";
import Numbers from "../components/numberLine";

const Header = styled.header`
  display: flex;
  height: 280px;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
  }
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

  @media screen and (max-width: 800px) {
    margin: 15px;
    min-width: 0;
  }
`;

const Upcoming = styled.h2`
  font-family: "Roboto Mono";
  color: #666;
  margin: auto;
  text-align: center;
  font-weight: 400;
`;

const Spacer = styled.div`
  height: 100px;
`;

export const getServerSideProps: GetServerSideProps = async context => {
  const data = (
    await axios.get(
      "https://api.meetup.com/developerdeepdives/events?fields=how_to_find_us&status=upcoming"
    )
  ).data;
  return {
    props: {
      meetups: data
    }
  };
};

export default ({ meetups }) => {
  const event = meetups[0];
  return (
    <Layout>
      <Header>
        <Icon>
          {`<`}
          <Blue>/</Blue>
          {">"}
        </Icon>
        <Lead>
          <Typing avgTypingDelay={60} stdTypingDelay={15}>
            Meet Other Developers on Long Island.
          </Typing>
        </Lead>
      </Header>
      <Upcoming>{event ? "next event:" : "no scheduled event"}</Upcoming>
      {event ? (
        <>
          <Numbers />
          <Event event={event} />
        </>
      ) : (
        <Spacer />
      )}
    </Layout>
  );
};
