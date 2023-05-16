import clsx from 'clsx';

function GetInTouchPing() {
   return (
      <div
         className={clsx(
            'text-md flex translate-y-24 content-center items-center justify-center gap-4 font-semibold'
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
         Get In Touch!
      </div>
   );
}

export default GetInTouchPing;
