import React from "react";
import styled from "styled-components";

interface Venue {
  address_1: string;
  city: string;
}

export interface Meetup {
  created: number;
  duration: number;
  id: string;
  local_date: string;
  link: string;
  name: string;
  local_time: string;
  venue?: Venue;
}

interface Props {
  meetup: Meetup;
}

const Event: React.FC<Props> = ({ meetup }) => {
  return (
    <div>
      <a href={meetup.link}>
        <h1>{meetup.name}</h1>
      </a>
    </div>
  );
};

export default Event;
