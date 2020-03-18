import { AppProps } from "next/app";
import "../app.css";
import "react-typist/dist/Typist.css";
import "@animated-burgers/burger-squeeze/dist/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
