import React, { useEffect } from "react";

export const TWITCH_EMBED_URL = "https://embed.twitch.tv/embed/v1.js";

interface Props {
  targetId: string;
  width: number | string;
  height: number | string;
  allowfullscreen?: boolean;
  channel: string;
  theme?: "light" | "dark";
}

const TwitchVideoEmbed: React.FC<Props> = ({
  targetId,
  width,
  height,
  allowfullscreen = true,
  channel,
  theme = "dark"
}) => {
  useEffect(() => {
    let embed;
    const script = document.createElement("script");
    script.setAttribute("src", TWITCH_EMBED_URL);
    const streamOptions = {
      width,
      height,
      allowfullscreen,
      channel,
      layout: "video",
      theme
    };

    script.addEventListener("load", () => {
      embed = new window.Twitch.Embed(targetId, { ...streamOptions });
      embed.addEventListener(window.Twitch.Embed.VIDEO_READY, () => {
        const player = embed.getPlayer();
        console.log(player);
      });
    });

    document.body.appendChild(script);
  }, []);

  return <div id={targetId}></div>;
};

export default TwitchVideoEmbed;
