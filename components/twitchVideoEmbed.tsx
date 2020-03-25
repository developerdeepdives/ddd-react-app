import React, { useEffect } from "react";

export const TWITCH_EMBED_URL = "https://embed.twitch.tv/embed/v1.js";

export const loadEmbedApi = (
  callback: (this: HTMLScriptElement, ev: Event) => any
) => {
  const scriptElement = document.createElement("script");
  scriptElement.setAttribute("src", TWITCH_EMBED_URL);
  scriptElement.addEventListener("load", callback);
  document.body.appendChild(scriptElement);
};

interface Props {
  targetID: string;
  width: number | string;
  height: number | string;
  allowfullscreen?: boolean;
  channel: string;
  theme?: "light" | "dark";
}

const TwitchEmbed: React.FC<Props> = props => {
  useEffect(() => {
    let embed;
    const script = document.createElement("script");
    script.setAttribute("src", TWITCH_EMBED_URL);
    const streamOptions = {
      width: props.width,
      height: props.height,
      allowfullscreen: props.allowfullscreen || true,
      channel: props.channel,
      layout: "video",
      theme: props.theme || "dark"
    };
    script.addEventListener("load", () => {
      embed = new window.Twitch.Embed(props.targetID, { ...streamOptions });
      embed.addEventListener(window.Twitch.Embed.VIDEO_READY, () => {
        var player = embed.getPlayer();
        console.log(player);
      });
    });
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <div id={props.targetID}></div>
    </>
  );
};

export default TwitchEmbed;
