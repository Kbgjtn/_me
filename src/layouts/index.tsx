import clsx from "clsx";
import { Trispace } from "next/font/google";
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
    <div id="__root" className={clsx("flex-1", [trispace.variable])}>
      {children}
    </div>
  );
}

export default Core;
