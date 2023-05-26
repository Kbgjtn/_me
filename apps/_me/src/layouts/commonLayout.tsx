import { BookIcon, GithubIcon, MeIcon, PostsIcon } from "@/components/icons";
import NavBar from "@/components/modules/navbar/navigation-bar";
import Footer from "@/components/templates/footer/footer";
import { getHost } from "@/helpers";
import clsx from "clsx";

import type { PropsWithChildren } from "react";

function CommonLayout({ children }: PropsWithChildren) {
   return (
      <>
         <header>
            <NavBar />
         </header>
         <main className="flex min-h-screen flex-col">{children}</main>
         <footer>
            <Footer />
         </footer>
      </>
   );
}

export default CommonLayout;
