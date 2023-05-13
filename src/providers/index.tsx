import { ThemeProvider } from "next-themes";
import { MDXProvider } from "@mdx-js/react";
import mdxCustomComponentStyle from "@/components/mdx/custom";

import type { PropsWithChildren } from "react";

function Provider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider
      defaultTheme="system"
      attribute="class"
      disableTransitionOnChange
    >
      <MDXProvider components={mdxCustomComponentStyle}>{children}</MDXProvider>
    </ThemeProvider>
  );
}

export default Provider;
