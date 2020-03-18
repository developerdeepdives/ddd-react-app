import React from "react";
import styled from "styled-components";
import axios from "axios";
import Layout from "../components/layout";
import Typing from "react-typist";
import Event from "../components/event";
import { GetServerSideProps } from "next";
import Numbers from "../components/numberLine";

const Header = styled.div`
  margin: 1rem auto -5rem;
  padding: 2rem;
  max-width: 800px;
`;

export const getServerSideProps: GetServerSideProps = async context => {
  const data = (
    await axios.get(
      "https://api.meetup.com/developerdeepdives/events?status=past&desc=true"
    )
  ).data;
  return {
    props: {
      pastEvents: data
    }
  };
};

interface EventShape {
  created: number;
  duration: number;
  id: string;
  name: string;
  date_in_series_pattern: boolean;
  status: string;
  time: number;
  local_date: string;
  local_time: string;
  updated: number;
  utc_offset: number;
  waitlist_count: number;
  yes_rsvp_count: number;
  group: any;
  link: string;
  description: string;
  visibility: "public" | "public_limited" | "members";
  member_pay_fee: false;
  venue?: {
    address_1: string;
    venue_city: string;
    city: string;
  };
}

interface Props {
  pastEvents: EventShape[];
}

const Events: React.FC<Props> = ({ pastEvents }) => {
  const pastEventCount = pastEvents.length;
  return (
    <Layout>
      <Header>
        <h1>
          <Typing avgTypingDelay={30} stdTypingDelay={5}>
            PAST EVENTS
          </Typing>
        </h1>
      </Header>
      <Numbers lineCount={pastEventCount * 50} />
      {pastEvents.map(event => (
        <Event event={event} key={event.id} />
      ))}
    </Layout>
  );
};

export default Events;
