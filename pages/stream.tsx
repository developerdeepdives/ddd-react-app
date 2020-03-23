import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Typing from "react-typist";
import TwitchVideoEmbed from "../components/twitchVideoEmbed";
import TwitchChatEmbed from "../components/twitchChatEmbed";

const StreamWrapper = styled.div`
  // padding: 24px;
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

  // @media screen and (max-width: 800px) {
  //   padding: 0;
  //   padding-bottom: 24px;
  //   height: 76vh;
  // }
`;

const Header = styled.div`
  margin: 1rem auto 0;
  padding: 2rem;
  max-width: 800px;
`;

const TwitchStream = props => {
  return (
    <Layout maxWidth="1200px" hideFade={true}>
      <Header>
        <h1>
          <Typing avgTypingDelay={30} stdTypingDelay={5}>
            STREAM
          </Typing>
        </h1>
      </Header>
      <div></div>
      <StreamWrapper>
        <TwitchVideoEmbed
          targetID={"twitch-stream"}
          width={"100%"}
          height={"100%"}
          channel="developerdeepdives"
        ></TwitchVideoEmbed>
      </StreamWrapper>
      <TwitchChatEmbed frameborder="6px"></TwitchChatEmbed>
    </Layout>
  );
};

export default TwitchStream;
