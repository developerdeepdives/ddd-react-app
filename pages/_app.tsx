import { AppProps } from "next/app";
import "../app.css";
import "@animated-burgers/burger-squeeze/dist/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
