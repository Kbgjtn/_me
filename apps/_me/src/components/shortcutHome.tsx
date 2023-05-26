import { useState, useEffect } from "react";
import { useKBar } from "kbar";
import clsx from "clsx";

export default function ShortcutHome() {
   const { query } = useKBar();
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      setMounted(true);
   }, []);

   if (mounted) {
      const isMac = /(Mac)/i.test(navigator.userAgent);
      const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);

      if (isMobile) {
         return (
            <button
               type="button"
               className={clsx(
                  "rounded-md p-2",
                  "hover:bg-silversand_shades-400",
                  "dark:hover:bg-[#1a1a1a]"
               )}
               onClick={query.toggle}
            >
               <kbd className="bg-silversand_shades-800 mx-1 rounded-md px-3 py-1 text-xl font-semibold text-white">
                  ⌘
               </kbd>
            </button>
         );
      } else if (isMac) {
         return (
            <button
               type="button"
               className={clsx(
                  "fixed right-12 top-12 -translate-y-1 p-2",
                  "rounded-md",
                  "hover:bg-earie",
                  "dark:hover:bg-[#1a1a1a]"
               )}
               onClick={query.toggle}
            >
               <kbd className="bg-charcoal text-md mx-1 rounded-md px-2 py-1 font-semibold text-white">
                  ⌘
               </kbd>
               <code>+</code>
               <kbd className="bg-silversand_shades-800 text-md mx-1 rounded-md px-2 py-1 font-semibold text-white">
                  K
               </kbd>
            </button>
         );
      } else {
         return (
            <button
               type="button"
               className={clsx(
                  "group fixed right-12 top-12 -translate-y-1 rounded-md px-3 py-2",
                  "dark:hover:bg-charcoal"
               )}
               onClick={query.toggle}
            >
               <kbd
                  className={clsx(
                     "mx-1 rounded-md px-2 py-1 ",
                     "bg-silversand_shades-900",
                     "text-md text-yellow1 font-semibold",
                     "dark:group-hover:text-red1"
                  )}
               >
                  ctrl
               </kbd>
               <code className={clsx("text-silversand_shades-600")}>+</code>
               <kbd
                  className={clsx(
                     "mx-1 rounded-md px-2 py-1 ",
                     "bg-silversand_shades-900",
                     "text-md text-yellow1 font-semibold"
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
