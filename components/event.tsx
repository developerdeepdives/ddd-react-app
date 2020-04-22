import React from "react";
import styled from "styled-components";

const Red = styled.span`
  color: #ff4141;
`;

const Green = styled.span`
  color: #8dfc91;
`;

const Blue = styled.span`
  color: #15dcd1;
`;

const Container = styled.div`
  margin: 21px auto;
  padding: 42px;
  max-width: 800px;
  font-family: "Roboto Mono";
  position: relative;
`;

const ClickableEventWrapper = styled.a`
  color: inherit;
  text-decoration: inherit;

  &:before {
    content: "";
    position: absolute;
    display: block;
    height: 10px;
    width: 10px;
    border-radius: 10px;
    top: 48px;
    left: -20px;
  }

  &:hover:before {
    background-color: #ff4141;
  }
`;

const EventDescription = styled.div`
  & a {
    color: #ffa741;
    text-decoration: inherit;
  }
  & a:hover {
    color: #15dcd1;
  }
`;

interface Venue {
  address_1: string;
  city: string;
}

export interface Meetup {
  created: number;
  duration: number;
  id: string;
  name: string;
  date_in_series_pattern: boolean;
  status:
    | "cancelled"
    | "draft"
    | "past"
    | "proposed"
    | "suggested"
    | "upcoming";
  time: number;
  local_date: string;
  local_time: string;
  updated: number;
  utc_offset: number;
  waitlist_count: number;
  yes_rsvp_count: number;
  link: string;
  description: string;
  visibility: "public" | "public_limited" | "members";
  member_pay_fee: boolean;
  venue?: Venue;
  is_online_event: boolean;
  how_to_find_us: string;
}

interface Props {
  meetup: Meetup;
}

const Event: React.FC<Props> = ({ meetup }) => {
  const eventDescription = { __html: meetup.description };

  const fakeFrontMatter = [
    { key: "title", value: meetup.name },
    { key: "date", value: `${meetup.local_date} at ${meetup.local_time}` },
    {
      key: "venue",
      value: meetup.venue
        ? meetup.is_online_event
          ? meetup.how_to_find_us
          : `${meetup.venue.address_1}, ${meetup.venue.city}`
        : "Virtual Live Stream",
    },
  ];
  return (
    <Container>
      <ClickableEventWrapper
        rel="noopener noreferrer"
        target="_blank"
        href={meetup.link}
      >
        <p>
          ---
          <br />
          {fakeFrontMatter.map((item) => (
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
        <p>{meetup.yes_rsvp_count} people RSVP'd</p>
      </ClickableEventWrapper>
    </Container>
  );
};

export default Event;
