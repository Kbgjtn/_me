import { Head, Html, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-[#8B8B8B] dark:bg-charcoal dark:text-[#b2b2b2] text-[#1A1A1A]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
