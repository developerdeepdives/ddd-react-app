import React from "react";
import Typing from "react-typist";
import styled from "styled-components";
import Layout from "../components/layout";
import TwitchVideoEmbed from "../components/twitchVideoEmbed";

const Header = styled.div`
  margin: 1rem auto 0;
  padding: 2rem;
  max-width: 800px;
`;

const TwitchStream = props => {
  return (
    <Layout>
      <Header>
        <h1>
          <Typing avgTypingDelay={30}>STREAM</Typing>
        </h1>
      </Header>
      <TwitchVideoEmbed
        targetId="twitch-stream"
        width="100%"
        height="100%"
        channel="developerdeepdives"
      />
    </Layout>
  );
};

export default TwitchStream;
