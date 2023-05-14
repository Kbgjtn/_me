import { BookIcon, GithubIcon, MeIcon, PostsIcon } from "@/components/icons";
import NavBar, {
  NavigationLinkItemProps,
} from "@/components/modules/navbar/navigation-bar";
import Footer from "@/components/templates/footer/footer";
import clsx from "clsx";
import { useTheme } from "next-themes";

import type { PropsWithChildren } from "react";

function CommonLayout({ children }: PropsWithChildren) {
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
    title: "me",
    href: "https://www.coocobolo.com",
    icon: (
      <MeIcon
        props={{ className: clsx(`h-9 w-9 transition-all`) }}
        anoth={{ isIconHover: false }}
        key="1"
      />
    ),
  },
  {
    title: "repository",
    href: "https://github.com/Kbgjtn",
    icon: (
      <GithubIcon
        key="2"
        props={{ className: clsx(`h-9 w-9`) }}
        anoth={{ isIconHover: false }}
      />
    ),
  },
  {
    title: "posts",
    href: "#blogpost",
    icon: (
      <PostsIcon
        key="2"
        props={{ className: clsx(`h-8 w-8`) }}
        anoth={{ isIconHover: false }}
      />
    ),
  },

  {
    title: "book",
    href: "#reading-list",
    icon: (
      <BookIcon
        props={{ className: clsx(`h-9 w-9`) }}
        anoth={{ isIconHover: false }}
        key="3"
      />
    ),
  },
];

export default CommonLayout;
