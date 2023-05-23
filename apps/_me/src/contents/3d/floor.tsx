import { Html, useProgress } from "@react-three/drei";
import { LoadingBar } from "@/components/ui/loadingBar";
import clsx from "clsx";

function Floor() {
   const { progress } = useProgress();

   return (
      <Html
         as="div"
         center
         style={{
            display: "flex",
            maxHeight: "100vh",
            maxWidth: "100vw",
            height: "full",
            width: "full",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginLeft: "4px",
            marginRight: "4px",
         }}
      >
         <div
            className={clsx(
               "bg-silversand_shades-400 dark:bg-silversand_shades border-silversand_shades-700 dark:border-earie relative flex w-full items-center justify-center rounded-xl border-2 "
            )}
         >
            <div
               className={clsx(
                  "px-56 py-48 max-sm:px-12 max-sm:py-32 sm:max-md:px-36 "
               )}
            >
               <LoadingBar loading={parseInt(progress.toString())} />
            </div>
         </div>
      </Html>
   );
}

export default Floor;
