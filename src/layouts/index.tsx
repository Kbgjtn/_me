import clsx from "clsx";
import { Trispace, JetBrains_Mono as JetBrainsMono } from "next/font/google";
import { PropsWithChildren, useEffect } from "react";

const trispace = Trispace({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: "400",
});

const jetBrainsMono = JetBrainsMono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space",
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
