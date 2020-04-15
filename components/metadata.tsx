import React from "react";
import Head from "next/head";

interface Props {
  pageName: string;
}

const DESCRIPTION =
  "At Developer Deep Dives working professionals, hobbyists, and beginners come together to explore new and important technologies in the software development world. Along with learning, we have built a network of skilled developers that is able to benefit all of our attendees with any problem they may encounter in their career. We meet at The Ergonomic Group, Inc in Westbury, our corporate sponsor who provides us a space to meet in, as well as other benefits.";
const TITLE = "Developer Deep Dives";
const UPDATED_AT = new Date(Date.now()).toISOString();
const IMAGE_URL = "/ddd_logo.jpg";

const Metadata: React.FC<Props> = ({ pageName }) => {
  return (
    <Head>
      <title>Developer Deep Dives | {pageName}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta name="og:locale" content="en_US" />
      <meta name="og:type" content="website" />
      <meta name="og:title" content={TITLE} />
      <meta name="og:url" content="https://www.developerdeepdives.com/" />
      <meta name="og:site_name" content="Developer Deep Dives" />
      <meta name="og:updated_time" content={UPDATED_AT} />
      <meta name="og:image" content={IMAGE_URL} />
      <meta name="og:image:secure_url" content={IMAGE_URL} />
      <meta name="og:image:width" content="300" />
      <meta name="og:image:height" content="168" />
      <meta name="og:image:alt" content="Homepage" />
      <meta name="og:image:type" content="image/jpg" />
      <link rel="icon" type="image/ico" href="/ddd_logo.ico"></link>
    </Head>
  );
};

export default Metadata;
