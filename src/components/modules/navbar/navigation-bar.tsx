import { motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";
import { z } from "zod";
import ThemeToggle from "@/components/ui/themeToggle";
import { useTheme } from "next-themes";

import type { ReactElement } from "react";

export type NavigationLinkItemProps = {
  title: string;
  href: string;
  icon: ReactElement;
};

const urlSchema = z.string().url();

const NavBar = ({ items }: { items: NavigationLinkItemProps[] }) => {
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
        "flex flex-col relative w-full h-auto items-center justify-center top-0 z-1 py-12 px-11"
      )}
      initial="hidden"
      animate="show"
    >
      <motion.dl
        className="flex relative justify-center items-center font-medium text-white font-cascode text-xl gap-[2rem] xl:text-2xl"
        variants={item}
      >
        {items.map((item) => (
          <span
            onClick={() => handleClickScroll(item.href as string)}
            onMouseEnter={() => setHoverLogoName(`${item.title}`)}
            onMouseLeave={() => setHoverLogoName("")}
            draggable={false}
            key={`${item.title}`}
            style={{ transition: "500ms" }}
          >
            {item.icon}
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
