import type { AppProps } from "next/app";
import "../hooks/css/global.css";

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
