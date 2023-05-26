import { ThemeProvider } from "next-themes";
import CommandBar from "./commandProvider";
import type { PropsWithChildren } from "react";

function Provider({ children }: PropsWithChildren) {
   return (
      <ThemeProvider
         defaultTheme="dark"
         enableColorScheme
         enableSystem={true}
         attribute="class"
         disableTransitionOnChange={false}
      >
         <CommandBar>{children}</CommandBar>
      </ThemeProvider>
   );
}

export default Provider;
