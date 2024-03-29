import clsx from "clsx";
import { Head, Html, Main, NextScript } from "next/document";

function Document() {
   return (
      <Html lang="en">
         <Head />
         <body
            className={clsx(
               "font-inter bg-[#8C8C8C] text-[#141414] selection:bg-[#f25f5c] selection:text-[#1a1a1a]",
               "dark:bg-super-black dark:text-[#F2F2F2] dark:selection:bg-[#a3b18a] dark:selection:text-[#1c1c1c]"
            )}
         >
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}

export default Document;
