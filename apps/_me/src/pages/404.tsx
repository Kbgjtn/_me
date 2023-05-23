import clsx from "clsx";
import Head from "next/head";
import Image from "next/image";

function NotFound() {
   return (
      <>
         <Head>
            <title>Page Not Found</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="robots" content="noindex" />
         </Head>

         <div className="flex h-screen w-screen flex-col content-center items-center justify-center">
            <div
               className={clsx(
                  "absolute h-40 w-40",
                  "-z-10 blur-[130px] filter",
                  "to-charcoal bg-gradient-to-r from-orange-700",
                  "dark:from-silversand_shades-500 dark:bg-gradient-to-r dark:to-orange-200",
                  "rounded-e-3xl rounded-l-xl rounded-t-xl"
               )}
            />

            <figure className="max-w-xl">
               <Image
                  className="h-auto max-w-full rounded-lg grayscale filter hover:grayscale-0"
                  src="/images/memoji.png"
                  alt="memoji cannot unloaded"
                  width="1200"
                  height="1200"
                  quality={100}
                  referrerPolicy="no-referrer"
                  draggable={false}
               />
               <figcaption className="mt-2 text-center text-xl font-semibold">
                  Page you're lookin' for is not found!
               </figcaption>
            </figure>
            <button
               type="button"
               onClick={() => {
                  window.location.href = "/";
               }}
               className={
                  "border-earie dark:border-silversand_shades-800 mt-4 rounded-md border-2 px-12 py-2"
               }
            >
               <span>← </span> Back
            </button>
         </div>
      </>
   );
}

export default NotFound;
