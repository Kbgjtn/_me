import { motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";
import { z } from "zod";
import { BookIcon, GithubIcon, MeIcon } from "@/components/icons";
import ThemeToggle from "@/components/ui/themeToggle";
import { useTheme } from "next-themes";

import type { ReactElement } from "react";

type NavigationLinkItems = {
  title: string;
  href: string;
  icon: ReactElement<"svg">;
};
const urlSchema = z.string().url();

const NavBar = (props: NavigationLinkItems[]) => {
  const [hoverLogoName, setHoverLogoName] = useState<string>("");
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleClickScroll = (id: string) => {
    if (urlSchema.safeParse(id).success) {
      window.location.href = id;
      return;
    }

    const element = document.querySelectorAll(id);

    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element[0].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className={clsx(
        "flex flex-col relative w-full h-auto bg-[#8B8B8B] items-center justify-center top-0 z-1 py-12 px-11",
        "dark:bg-charcoal"
      )}
      initial="hidden"
      animate="show"
    >
      <motion.dl
        className="flex relative justify-center items-center font-medium text-white font-cascode text-xl gap-[2rem] xl:text-2xl"
        variants={item}
      >
        {[
          [
            "me",
            "https://www.coocobolo.com",
            <MeIcon
              props={{ className: clsx(`h-9 w-9 transition-all`) }}
              anoth={{ isIconHover: hoverLogoName === "me", isDark }}
              key="1"
            />,
          ],
          [
            "repository",
            "https://github.com/Kbgjtn",
            <GithubIcon
              key="2"
              props={{ className: clsx(`h-9 w-9`) }}
              anoth={{ isIconHover: hoverLogoName === "repository", isDark }}
            />,
          ],
          [
            "book",
            "#reading-list",
            <BookIcon
              props={{ className: clsx(`h-9 w-9`) }}
              anoth={{ isIconHover: hoverLogoName === "book", isDark }}
              key="3"
            />,
          ],
          /* [
            "project",
            "#project-list",

            <ProjectListIcon
              props={{ className: clsx(`h-9 w-9`) }}
              anoth={{ isIconHover: hoverLogoName === "project", isDark }}
              key="4"
            />,
          ], */
        ].map(([title, url, svg]) => (
          <span
            onClick={() => handleClickScroll(url as string)}
            onMouseEnter={() => setHoverLogoName(`${title}`)}
            onMouseLeave={() => setHoverLogoName("")}
            draggable={false}
            key={`${title}`}
            style={{ transition: "500ms" }}
          >
            {svg}
          </span>
        ))}

        <ThemeToggle />
      </motion.dl>
      {hoverLogoName ? (
        <motion.div
          className="text-center font-semibold text-md absolute top-28 mx-auto opacity-30"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {`./${hoverLogoName}`.split("").map((char, index) => {
            return (
              <motion.span
                className=""
                key={char + "-" + index}
                variants={letter}
              >
                {char}
              </motion.span>
            );
          })}
        </motion.div>
      ) : null}
    </motion.nav>
  );
};

export default NavBar;

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerDirection: -1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const transtionListItem = {
  hidden: {
    x: "-30px",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.6,
      stiffness: 250,
      damping: 25,
    },
  },
  exit: { y: 20, opacity: 0 },
};
