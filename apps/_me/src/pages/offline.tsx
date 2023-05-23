import clsx from "clsx";
import Head from "next/head";
import Image from "next/image";

function Offline() {
   return (
      <>
         <Head>
            <title>Offline Mode</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="robots" content="noindex" />
         </Head>

         <div className="flex h-full w-screen flex-col items-center justify-center">
            <div
               className={clsx(
                  "absolute h-36 w-32",
                  "-z-10 blur-[120px] filter",
                  "to-charcoal bg-gradient-to-r from-orange-700",
                  "dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500",
                  "rounded-e-3xl rounded-l-xl rounded-t-xl"
               )}
            />
            <figure className="max-w-lg">
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
               <figcaption className="mt-2 text-center text-sm">
                  You aren't connected to a working internet connection
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
               Retry
            </button>
         </div>
      </>
   );
}

export default Offline;
