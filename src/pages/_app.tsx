import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "../hooks/css/main.css";
import * as gtag from "../lib/gtag";

const cascadiaCode = localFont({
	src: [
		{
			path: "../assets/fonts/CascadiaCode/woff2/static/CascadiaCode-Regular.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../assets/fonts/CascadiaCode/woff2/static/CascadiaMono-Light.woff2",
			weight: "400",
			style: "thin",
		},
	],
});

const isProduction = process.env.NODE_ENV === "production";

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url: URL) => {
			if (isProduction) gtag.pageview(url);
		};

		router.events.on("routeChangeComplete", handleRouteChange);

		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);

	return (
		<main className={cascadiaCode.className}>
			<Component {...pageProps} />
			<Analytics />
		</main>
	);
}
