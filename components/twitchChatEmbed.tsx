import React from "react";
import styled from "styled-components";

const ChatEmbed = styled.iframe`
  border: none;
  height: 400px;

  @media screen and (max-width: 600px) {
    height: 420px;
  }
`;

interface Props {
  frameborder: string;
  scrolling?: "yes" | "no";
}

const TwitchChatEmbed: React.FC<Props> = ({
  frameborder,
  scrolling = "yes"
}) => {
  const embedOptions = {
    frameborder,
    height: "100%",
    width: "100%",
    scrolling,
    id: "developerdeepdives",
    src: "https://www.twitch.tv/embed/developerdeepdives/chat?darkpopout"
  };
  return <ChatEmbed {...embedOptions}></ChatEmbed>;
};

export default TwitchChatEmbed;
