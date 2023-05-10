import Provider from "@/providers";
import { Analytics } from "@vercel/analytics/react";

import "@/styles/main.css";

import ScrollProgressY from "@/components/modules/scrollProgress/scrollProgress";
import Core from "@/layouts";
import CommonLayout from "@/layouts/commonLayout";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";

type PageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: PageWithLayout;
};

function getDefaultLayout(page: ReactElement): ReactNode {
	return <CommonLayout>{page}</CommonLayout>;
}

function App({
	Component,
	pageProps,
	router,
}: AppPropsWithLayout): ReactElement {
	let getLayout;

	if (router.query.simpleLayout) {
		getLayout = (page: ReactElement) => <main>{page}</main>;
	} else if (Component.getLayout) {
		getLayout = Component.getLayout;
	} else {
		getLayout = getDefaultLayout;
	}

	return (
		<Provider>
			<Core>
				{getLayout(<Component {...pageProps} />)}
				<Analytics />
			</Core>
		</Provider>
	);
}

export default App;
