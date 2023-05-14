import { BookIcon, GithubIcon, MeIcon } from "@/components/icons";
import NavBar, {
  NavigationLinkItemProps,
} from "@/components/modules/navbar/navigation-bar";
import Footer from "@/components/templates/footer/footer";
import clsx from "clsx";
import type { ReactNode } from "react";
import { useTheme } from "next-themes";

import type { PropsWithChildren } from "react";

function TestLayout({ children }: PropsWithChildren) {
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
        props={{ className: clsx(`h-9 w-9 transition-all`) }}
        anoth={{ isIconHover: false }}
        key="1"
      />
    ),
  },
];

export const getLayout = (page: ReactNode) => <TestLayout>{page}</TestLayout>;

export default TestLayout;
