import React from "react";
import Head from "next/head";

interface Props {
  pageName: string;
}

const Metadata: React.FC<Props> = ({ pageName }) => {
  return (
    <Head>
      <title>Developer Deep Dives | {pageName}</title>
    </Head>
  );
};

export default Metadata;
