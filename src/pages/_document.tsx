import clsx from "clsx";
import { Head, Html, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={clsx(
          "bg-[#8B8B8B] font-sans text-[#1A1A1A] selection:text-[#1a1a1a]  selection:bg-[#f25f5c]",
          "dark:bg-charcoal dark:text-[#b2b2b2] dark:selection:text-[#1c1c1c] dark:selection:bg-[#a3b18a]"
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
