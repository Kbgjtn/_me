import clsx from "clsx";

type props = {
   isHover: boolean;
};

function GetInTouchPing({ isHover }: props) {
   return (
      <div
         className={clsx(
            "text-md absolute top-5 flex translate-y-24 content-center items-center justify-center gap-4 font-semibold"
         )}
      >
         <span className="inline-flex items-center justify-center self-center">
            <span
               className={clsx(
                  "absolute inline-flex h-3 w-3 animate-ping rounded-full bg-[#1c1c1c] opacity-50",
                  "bg-[#f3f3f3]"
               )}
            />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-[#3c3c3c]"></span>
         </span>
         <span
            className={clsx(
               "from-charcoal to-charcoal bg-gradient-to-r bg-clip-text transition delay-1000 ease-in-out",
               "text-xl text-transparent",
               "max-md:text-sm ",
               "dark:to-silversand_tints-300 dark:from-silversand_shades-400"
            )}
         >
            {!isHover ? "Get In Touch!" : null}
         </span>
      </div>
   );
}

export default GetInTouchPing;
