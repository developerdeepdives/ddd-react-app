import React from "react";
import Typing from "react-typist";
import styled from "styled-components";
import Layout from "../components/layout";
import TwitchVideoEmbed from "../components/twitchVideoEmbed";
import TwitchChatEmbed from "../components/twitchChatEmbed";

const Header = styled.div`
  margin: 1rem auto 0;
  padding: 2rem;
  max-width: 800px;
`;

const StreamWrapper = styled.div`
  padding-bottom: calc((var(--aspect-ratio, 0.5625) * 100%) + 24px);
  position: relative;
  margin-bottom: 12px;

  & #twitch-stream {
    height: 100%;
  }

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const TwitchStream = props => {
  return (
    <Layout maxWidth="1200px" pageName="Watch Now">
      <Header>
        <h1>
          <Typing avgTypingDelay={30}>STREAM</Typing>
        </h1>
      </Header>
      <StreamWrapper>
        <TwitchVideoEmbed
          targetId="twitch-stream"
          width="100%"
          height="100%"
          channel="developerdeepdives"
        />
      </StreamWrapper>
      <TwitchChatEmbed frameborder="6px"></TwitchChatEmbed>
    </Layout>
  );
};

export default TwitchStream;
