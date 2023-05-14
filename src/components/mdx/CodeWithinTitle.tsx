import useCopyableRef from "@/hooks/useCopyableRef";
import React, { ReactNode, useRef } from "react";
import Code from "./Code";

type CodeWithinTitleProps = {
  children: ReactNode;
};

export function CodeWithinTitle({ children }: CodeWithinTitleProps) {
  const preRef = useRef<HTMLPreElement | null>(null);
  const { isCopied, copy } = useCopyableRef<HTMLPreElement>(preRef);

  return null;
}
