import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 21px auto;
  padding: 42px;
  max-width: 800px;
  font-family: "Roboto Mono";
  position: relative;
  a {
    color: inherit; /* blue colors for links too */
    text-decoration: inherit;
  }
  a:before {
    position: absolute;
    content: "";
    display: block;
    height: 10px;
    width: 10px;
    border-radius: 10px;
    top: 48px;
    left: -20px;
  }
  a:hover:before {
    background-color: #ff4141;
  }
`;

const Red = styled.span`
  color: #ff4141;
`;

const Green = styled.span`
  color: #8dfc91;
`;

const Blue = styled.span`
  color: #15dcd1;
`;

const EventDescription = styled.div`
  & a {
    color: #8dfc91;
  }
`;

interface Props {
  event: {
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
  };
}

const Event: React.FC<Props> = ({ event }) => {
  const eventDescription = { __html: event.description }; // For use with 'dangerouslySetInnerHTML' prop
  const fakeFrontMatter = [
    { key: "title", value: event.name },
    { key: "date", value: `${event.local_date} at ${event.local_time}` },
    event.venue
      ? { key: "venue", value: `${event.venue.address_1}, ${event.venue.city}` }
      : { key: "venue", value: `Virtual Live Stream` }
  ];

  return (
    <Container>
      <a href={event.link} rel="noopener noreferrer">
        <p>
          ---
          <br />
          {fakeFrontMatter.map(item => (
            <span key={item.key}>
              <Red>{item.key}</Red>
              <Blue>: "</Blue>
              <Green>{item.value}</Green>
              <Blue>"</Blue>
              <br />
            </span>
          ))}
          ---
        </p>
        <p>
          <Blue>{"# "}</Blue>
          <Green>Description</Green>
        </p>
        <EventDescription dangerouslySetInnerHTML={eventDescription} />
        <p>{event.yes_rsvp_count} people RSVP'd</p>
      </a>
    </Container>
  );
};

export default Event;
