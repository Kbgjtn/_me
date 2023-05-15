import Head from 'next/head';

function NotFound() {
   return (
      <>
         <Head>
            <title>Page Not Found</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="robots" content="noindex" />
         </Head>

         <div className="flex h-screen w-screen content-center items-center justify-center">
            <h1>Not Found!</h1>
         </div>
      </>
   );
}

export default NotFound;
