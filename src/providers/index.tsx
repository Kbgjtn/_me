import { ThemeProvider } from "next-themes";

import type { PropsWithChildren } from "react";

function Provider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider
      defaultTheme="system"
      attribute="class"
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}

export default Provider;
