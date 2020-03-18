import { AppProps } from "next/app";
import "../app.css";
import "react-typist/dist/typist.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
