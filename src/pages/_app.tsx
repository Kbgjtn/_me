import { Analytics } from "@vercel/analytics/react";
import Provider from "@/providers";

import "@/styles/main.css";

import type { AppProps } from "next/app";
import Core from "@/layouts";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Core>
        <Component {...pageProps} />
        <Analytics />
      </Core>
    </Provider>
  );
}

export default App;
