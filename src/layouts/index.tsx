import { Trispace } from "next/font/google";
import clsx from "clsx";
import { PropsWithChildren, useEffect } from "react";

const trispace = Trispace({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space",
  weight: "400",
});

function Core({ children }: PropsWithChildren) {
  useEffect(() => {
    document.documentElement.classList.add(trispace.variable);
  }, []);

  return (
    <div id="__root" className={clsx([trispace.variable])}>
      {children}
    </div>
  );
}

export default Core;
