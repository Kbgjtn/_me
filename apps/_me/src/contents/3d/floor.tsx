import { Html } from "@react-three/drei";
import clsx from "clsx";

function Floor() {
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
               "relative flex w-full items-center justify-center "
            )}
         >
            {/* <LoadingBar loading={parseInt(progress.toString())} /> */}
            <div className="relative rounded-xl p-10">
               <svg
                  className="h-12 w-12 animate-spin"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M12 4.75V6.25"
                     stroke="currentColor"
                     strokeWidth="1.5"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  ></path>
                  <path
                     d="M17.1266 6.87347L16.0659 7.93413"
                     stroke="currentColor"
                     strokeWidth="1.5"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  ></path>
                  <path
                     d="M19.25 12L17.75 12"
                     stroke="currentColor"
                     strokeWidth="1.5"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  ></path>
                  <path
                     d="M17.1266 17.1265L16.0659 16.0659"
                     stroke="currentColor"
                     strokeWidth="1.5"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  ></path>
                  <path
                     d="M12 17.75V19.25"
                     stroke="currentColor"
                     strokeWidth="1.5"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  ></path>
                  <path
                     d="M7.9342 16.0659L6.87354 17.1265"
                     stroke="currentColor"
                     strokeWidth="1.5"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  ></path>
                  <path
                     d="M6.25 12L4.75 12"
                     stroke="currentColor"
                     strokeWidth="1.5"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  ></path>
                  <path
                     d="M7.9342 7.93413L6.87354 6.87347"
                     stroke="currentColor"
                     strokeWidth="1.5"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  ></path>
               </svg>
            </div>
         </div>
      </Html>
   );
}

export default Floor;
