"use client";
import clsx from "clsx";
import { Fira_Mono, JetBrains_Mono as JetBrainsMono } from "next/font/google";
import { useEffect } from "react";
import type { PropsWithChildren } from "react";

const trispace = Fira_Mono({
   subsets: ["latin"],
   display: "swap",
   variable: "--font-sans",
   weight: "400",
});

const jetBrainsMono = JetBrainsMono({
   subsets: ["latin"],
   display: "swap",
   variable: "--font-mono",
   weight: "400",
});

function Core({ children }: PropsWithChildren) {
   useEffect(() => {
      document.documentElement.classList.add(
         jetBrainsMono.variable,
         trispace.variable
      );
   }, []);

   return (
      <div
         id="__root"
         className={clsx("flex-1", [jetBrainsMono.variable, trispace.variable])}
      >
         {children}
      </div>
   );
}

export default Core;
