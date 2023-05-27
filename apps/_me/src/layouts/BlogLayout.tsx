import { MeIcon, PostsIcon } from "@/components/icons";
import NavBar from "@/components/modules/navbar/navigation-bar";
import Footer from "@/components/templates/footer/footer";
import { getHost } from "@/helpers";
import clsx from "clsx";
import type { ReactNode } from "react";

import type { PropsWithChildren } from "react";

function BlogLayout({ children }: PropsWithChildren) {
   return (
      <>
         <header>
            <NavBar items={navLinkItem} />
         </header>
         <main className="flex min-h-screen flex-col">{children}</main>
         <footer>
            <Footer />
         </footer>
      </>
   );
}

const navLinkItem = [
   {
      title: "home",
      href: getHost(),
      icon: (
         <MeIcon
            props={{
               className: clsx(`h-9 w-9 transition-all`),
            }}
            key="1"
         />
      ),
   },
   {
      title: "posts",
      href: `${getHost()}/posts`,
      icon: (
         <PostsIcon
            props={{
               className: clsx(`h-8 w-8 dark:fill-charcoal fill-[#AAAAAA]`),
            }}
            key="2"
         />
      ),
   },
];

export const getLayout = (page: ReactNode) => <BlogLayout>{page}</BlogLayout>;

export default BlogLayout;
