import MeThreeCanvas from "@/components/contents/tree";
import Head from "next/head";

function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex" />
      </Head>

      <div className="w-screen h-screen bg-[#1a1a1a]">
        <MeThreeCanvas path="/notfound.glb" />
      </div>
    </>
  );
}

export default NotFound;
