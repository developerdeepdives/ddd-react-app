import React from "react";
import { GetServerSideProps } from "next";
import styled from "styled-components";
import Typing from "react-typist";
import Layout from "../components/layout";
import axios from "axios";

const Container = styled.div`
  min-height: 300px;
  max-width: 800px;
  margin: 1rem auto;
  padding: 2rem;
  & h1 {
    margin-bottom: 3rem;
  }
`;

const Description = styled.span`
  font-family: "Roboto Mono";
  font-size: 18px;
`;

const IconButton = styled.a`
  font-family: "Roboto Mono";
  text-decoration: none;
  border: none;
  color: #ffa741;
  backgroundcolor: transparent;
  padding: 8px 14px 9px 36px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: color 0.1s ease-out;

  &:hover {
    color: #15dcd1;
  }

  & img {
    max-height: 36px;
    max-width: 36px;
    margin-left: -36px;
    margin-bottom: 0;
    position: absolute;
    padding: 6px;
  }
`;

export const getServerSideProps: GetServerSideProps = async context => {
  const response = await axios.get("https://api.meetup.com/developerdeepdives");
  return {
    props: {
      meetupGroup: response.data
    }
  };
};

interface Props {
  meetupGroup: {
    description: string;
  };
}

const About: React.FC<Props> = ({ meetupGroup }) => {
  const groupDescription = {
    __html: meetupGroup.description
  };
  return (
    <Layout pageName="About Us">
      <Container>
        <h1>
          <Typing stdTypingDelay={5}>ABOUT</Typing>
        </h1>
        <Description dangerouslySetInnerHTML={groupDescription} />
        <IconButton
          target="_blank"
          href="https://join.slack.com/t/developerdeepdives/shared_invite/zt-3r7o3f81-irUjqIjVq_xOLFWWlJVXXA"
        >
          <img alt="slack logo" src="/slack_logo.png" />
          joinUsOnSlack();
        </IconButton>
        <br />
        <IconButton
          target="_blank"
          href="https://github.com/developerdeepdives"
        >
          <img alt="github logo" src="/github_logo.svg" />
          checkOutOurGitHub();
        </IconButton>
        <br />
        <IconButton target="_blank" href="https://twitch.tv/developerdeepdives">
          <img alt="twitch.tv logo" src="/twitch_logo.png" />
          followUsOnTwitch();
        </IconButton>
      </Container>
    </Layout>
  );
};

export default About;
