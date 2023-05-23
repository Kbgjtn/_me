import { useEffect, useState } from "react";

export default function useNetworkStatus() {
   const [status, setStatus] = useState<boolean>(true);

   useEffect(() => {
      const setOnline = () => setStatus(true);
      const setOffline = () => setStatus(false);

      window.addEventListener("online", setOnline);
      window.addEventListener("offline", setOffline);

      return () => {
         window.removeEventListener("online", setOnline);
         window.removeEventListener("offline", setOffline);
      };
   });

   return {
      status,
   };
}
