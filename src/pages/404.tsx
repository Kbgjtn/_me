import Head from "next/head";

function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex" />
      </Head>

      <div className="flex w-screen h-screen justify-center items-center content-center">
        <h1>Not Found!</h1>
      </div>
    </>
  );
}

export default NotFound;
