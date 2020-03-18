import { AppProps } from 'next/app';
import '../app.css';
import 'react-typist/dist/Typist.css';

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
