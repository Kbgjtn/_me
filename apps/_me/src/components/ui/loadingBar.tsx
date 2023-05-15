export const LoadingBar = ({ loading }: { loading: number }) => {
   return (
      <div className="z-20 flex max-w-xl flex-col items-center justify-center">
         <p className="text-snow text-[16px] font-normal"> {loading + '%'}</p>
         <svg height="6" width="300">
            <line
               x="0"
               y="0"
               x2={`${loading}%`}
               y2="0"
               className={
                  'h-[4px] stroke-[#1c1c1c] stroke-[4px] dark:stroke-white'
               }
            />
         </svg>
      </div>
   );
};
