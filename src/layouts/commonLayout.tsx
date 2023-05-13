import NavBar from "@/components/modules/navbar/navigation-bar";
import Footer from "@/components/templates/footer/footer";

import type { PropsWithChildren } from "react";

function CommonLayout({ children }: PropsWithChildren) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="flex flex-col min-h-screen">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
export default CommonLayout;
