import { BookIcon, GithubIcon, MeIcon, PostsIcon } from "@/components/icons";
import NavBar, {
  NavigationLinkItemProps,
} from "@/components/modules/navbar/navigation-bar";
import Footer from "@/components/templates/footer/footer";
import clsx from "clsx";
import type { ReactNode } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

import type { PropsWithChildren } from "react";

function BlogLayout({ children }: PropsWithChildren) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      <header>
        <NavBar items={navLinkItem} />
      </header>
      <main className="flex flex-col min-h-screen">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

const navLinkItem = [
  {
    title: "home",
    href: "https://www.coocobolo.com",
    icon: (
      <MeIcon
        props={{
          className: clsx(`h-9 w-9 transition-all`),
        }}
        anoth={{ isIconHover: false }}
        key="1"
      />
    ),
  },
  {
    title: "posts",
    href: "https://www.coocobolo.com/posts",
    icon: (
      <PostsIcon
        key="2"
        props={{
          className: clsx(`h-8 w-8 dark:fill-charcoal fill-[#AAAAAA]`),
        }}
        anoth={{ isIconHover: false }}
      />
    ),
  },
];

export const getLayout = (page: ReactNode) => <BlogLayout>{page}</BlogLayout>;

export default BlogLayout;
