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

const IconButton = styled.a`
  font-family: "Roboto Mono";
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  border: none;
  color: #ffa741;
  background-color: transparent;
  padding: 8px 14px 9px 36px;
  cursor: pointer;
  // border: 2px solid #ffa741;
  transition: color 0.1s ease-in;

  &:hover {
    color: #15dcd1;
  }

  & img {
    max-height: 36px;
    max-width: 36px;
    margin-left: -36px;
    padding: 6px;
    position: absolute;
    margin-bottom: 0;
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
        <IconButton
          target="_blank"
          rel="noopener noreferrer"
          href="https://join.slack.com/t/developerdeepdives/shared_invite/zt-3r7o3f81-irUjqIjVq_xOLFWWlJVXXA"
        >
          <img src="/slack_logo.png" />
          joinUsOnSlack();
        </IconButton>
        <br />
        <IconButton
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/developerdeepdives"
        >
          <img src="/github_logo.png" />
          checkOutOurGitHub();
        </IconButton>
        <br />
        <IconButton
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitch.tv/developerdeepdives"
        >
          <img src="/twitch_logo.png" />
          followUsOnTwitch();
        </IconButton>
      </Container>
    </Layout>
  );
};

export default About;
