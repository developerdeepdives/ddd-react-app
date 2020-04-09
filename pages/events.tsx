import React from "react";
import Typing from "react-typist";
import styled from "styled-components";
import { GetServerSideProps } from "next";
import axios from "axios";
import Layout from "../components/layout";
import Event, { Meetup } from "../components/event";
import Numbers from "../components/numberLine";

const Header = styled.div`
  margin: 1rem auto -5rem;
  padding: 2rem;
  max-width: 800px;
`;

export const getServerSideProps: GetServerSideProps = async context => {
  const response = await axios.get(
    "https://api.meetup.com/developerdeepdives/events?status=past&desc=true"
  );
  const meetups = response.data;
  return {
    props: {
      pastMeetups: meetups
    }
  };
};

interface Props {
  pastMeetups: Meetup[];
}

const Events: React.FC<Props> = ({ pastMeetups }) => {
  return (
    <Layout footerFade pageName="Past Events">
      <Header>
        <h1>
          <Typing avgTypingDelay={30} stdTypingDelay={5}>
            PAST EVENTS
          </Typing>
        </h1>
      </Header>
      <Numbers lineCount={pastMeetups.length * 50} />
      {pastMeetups.map(meetup => (
        <Event meetup={meetup} key={meetup.id} />
      ))}
    </Layout>
  );
};

export default Events;
