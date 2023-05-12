import NavBar from "@/components/modules/navbar/navigation-bar";
import Footer from "@/components/templates/footer/footer";

import type { PropsWithChildren } from "react";

function CommonLayout({ children }: PropsWithChildren) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
export default CommonLayout;
