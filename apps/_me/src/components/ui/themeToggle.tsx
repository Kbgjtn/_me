import clsx from "clsx";
import { useTheme } from "next-themes";
import React from "react";
import useCurrenTheme from "@/hooks/useCurrentTheme";
import { BrightIcon, MoonIcon } from "../icons";

function ThemeToggle(): JSX.Element {
   const { setTheme } = useTheme();
   const { isDark, theme } = useCurrenTheme();

   return (
      <button
         className={clsx(
            "relative flex h-max w-max items-center justify-center"
         )}
         type="button"
         aria-label="Toggle Dark Mode"
         onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
         title={theme?.toString()}
      >
         {isDark ? (
            <BrightIcon
               props={{
                  className: clsx("group w-9 h-9  p-[3px]"),
               }}
               anoth={{ isDark }}
            />
         ) : (
            <MoonIcon
               props={{
                  className: clsx(
                     "group w-9 h-9 border-[#3C3B3D] bg-[#3C3B3D] border-2 rounded-full p-[3px]"
                  ),
                  fill: "#3C3B3D",
               }}
               anoth={{ isDark }}
            />
         )}
      </button>
   );
}

export default ThemeToggle;
