import { useState, useEffect } from "react";
import { useKBar } from "kbar";
import clsx from "clsx";

interface Props {
   mobileView: boolean;
}

export default function ShortcutHome({ mobileView = true }: Props) {
   const { query } = useKBar();
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      setMounted(true);
   }, []);

   if (mounted) {
      const isMac = /(Mac)/i.test(navigator.userAgent);
      const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);

      if (isMobile && mobileView) {
         return (
            <button
               type="button"
               className={clsx(
                  "group fixed top-0 rounded-md px-3 py-1.5",
                  "translate-x-4"
               )}
               onClick={query.toggle}
            >
               <kbd
                  className={clsx(
                     "mx-1 rounded-md px-4 py-1.5",
                     "bg-silversand_shades-600",
                     "text-md font-semibold text-black",
                     "dark:bg-silversand_shades-900",
                     "dark:group-hover:text-red1"
                  )}
               >
                  ⌘
               </kbd>
            </button>
         );
      } else if (isMac) {
         return (
            <button
               type="button"
               className={clsx(
                  "group fixed top-0 rounded-md px-3 py-1.5",
                  "translate-x-4"
               )}
               onClick={query.toggle}
            >
               <kbd
                  className={clsx(
                     "mx-1 rounded-md px-4 py-1.5",
                     "bg-silversand_shades-600",
                     "group-hover:text-yellow1 text-md font-semibold text-black",
                     "dark:bg-silversand_shades-900",
                     "dark:text-yellow1",
                     "dark:group-hover:text-red1"
                  )}
               >
                  ⌘
               </kbd>
               <code>+</code>
               <kbd
                  className={clsx(
                     "mx-1 rounded-md px-2 py-1.5",
                     "bg-silversand_shades-600",
                     "text-md font-semibold",
                     "group-hover:text-yellow1 text-black",
                     "dark:bg-silversand_shades-900",
                     "dark:text-yellow1",
                     "dark:group-hover:text-red1"
                  )}
               >
                  K
               </kbd>
            </button>
         );
      } else {
         return (
            <button
               type="button"
               className={clsx(
                  "group fixed top-0 rounded-md px-3 py-1.5",
                  "translate-x-4"
               )}
               onClick={query.toggle}
            >
               <kbd
                  className={clsx(
                     "mx-1 rounded-md px-2 py-1.5",
                     "bg-silversand_shades-600",
                     "dark:bg-silversand_shades-900",
                     "text-md font-semibold",
                     "group-hover:text-red1",
                     "dark:group-hover:text-red1"
                  )}
               >
                  ctrl
               </kbd>
               <code
                  className={clsx(
                     "text-silversand_shades-900 dark:text-silversand_shades-600"
                  )}
               >
                  +
               </code>
               <kbd
                  className={clsx(
                     "mx-1 rounded-md px-2.5 py-1.5",
                     "bg-silversand_shades-600",
                     "dark:bg-silversand_shades-900",
                     "text-md font-semibold",
                     "group-hover:text-yellow1",
                     "dark:group-hover:text-yellow1"
                  )}
               >
                  K
               </kbd>
            </button>
         );
      }
   }

   return <div />;
}
