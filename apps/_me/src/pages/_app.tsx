import { Analytics } from "@vercel/analytics/react";
import Provider from "@/providers";
import Core from "@/layouts";
import ScrollProgressY from "@/components/modules/scrollProgress/scrollProgress";

import "@/styles/main.css";

import type { AppProps } from "next/app";
import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";
import CommonLayout from "@/layouts/commonLayout";
import useNetworkStatus from "@/hooks/useNetworkStatus";
import NotFound from "./404";
import Offline from "./offline";

type WithLayout<P = object, IP = P> = NextPage<P, IP> & {
   getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
   Component: WithLayout;
};

function getDefaultLayout(page: ReactElement): ReactNode {
   return <CommonLayout>{page}</CommonLayout>;
}

function App({
   Component,
   pageProps,
   router,
}: AppPropsWithLayout): ReactElement {
   const { status } = useNetworkStatus();

   let getLayout: any;

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
            <ScrollProgressY />
            {status ? (
               getLayout(<Component {...pageProps} />)
            ) : (
               <CommonLayout>
                  <Offline />
               </CommonLayout>
            )}
            <Analytics />
         </Core>
      </Provider>
   );
}

export default App;
