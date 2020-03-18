import React from "react";
import styled from "styled-components";
import Typing from "react-typist";
import Layout from "../components/layout";
import axios from "axios";
import { GetServerSideProps } from "next";

const Description = styled.span`
  font-family: "Roboto Mono";
  font-size: 18px;
`;

const Container = styled.div`
  min-height: 300px;
  max-width: 800px;
  margin: 1rem auto;
  padding: 2rem;
  h1 {
    margin-bottom: 3rem;
  }
`;

export const getServerSideProps: GetServerSideProps = async context => {
  const data = (await axios.get("https://api.meetup.com/developerdeepdives"))
    .data;
  return {
    props: {
      meetupGroup: data
    }
  };
};

interface Props {
  meetupGroup: {
    description: string;
  };
}

const About: React.FC<Props> = ({ meetupGroup }) => {
  const groupDescription = { __html: meetupGroup.description };
  return (
    <Layout>
      <Container>
        <h1>
          <Typing stdTypingDelay={5}>ABOUT</Typing>
        </h1>
        <Description dangerouslySetInnerHTML={groupDescription} />
      </Container>
    </Layout>
  );
};

export default About;
