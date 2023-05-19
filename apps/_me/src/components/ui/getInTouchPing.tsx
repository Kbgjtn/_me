import clsx from 'clsx';

function GetInTouchPing() {
   return (
      <div
         className={clsx(
            'text-md absolute top-5 flex translate-y-24 content-center items-center justify-center gap-4 font-semibold'
         )}
      >
         <span className="inline-flex items-center justify-center self-center">
            <span
               className={clsx(
                  'absolute inline-flex h-3 w-3 animate-ping rounded-full bg-[#1c1c1c] opacity-50',
                  'bg-[#f3f3f3]'
               )}
            />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-[#3c3c3c]"></span>
         </span>
         <span
            className={clsx(
               'from-charcoal to-charcoal animate-pulse bg-gradient-to-r bg-clip-text text-transparent transition delay-1000 ease-in-out',
               'dark:from-silversand_tints-300 dark:to-silversand_shades-700'
            )}
         >
            Get In Touch!
         </span>
      </div>
   );
}

export default GetInTouchPing;
