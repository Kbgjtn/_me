import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function useCurrentUrl() {
   const [isDark, setIsDark] = useState<boolean>();
   const { theme } = useTheme();

   useEffect(() => {
      if (theme === "dark") setIsDark(true);
      if (theme === "light") setIsDark(false);
      return;
   }, [theme]);

   return { isDark, theme };
}
