import { motion } from "framer-motion";
import { ComponentProps, useState } from "react";
import clsx from "clsx";
import GithubLogoSvg from "@/assets/images/GithubLogo";
import { z } from "zod";
import ProjectLogoSvg from "@/assets/images/ProjectLogo";
import { BookIcon, MeIcon, ProjectListIcon } from "@/components/icons";

const urlSchema = z.string().url();
const NavBar = () => {
  const [hoverLogoName, setHoverLogoName] = useState<string>("");

  const handleClickScroll = (id: string) => {
    console.log({ id });
    if (urlSchema.safeParse(id).success) {
      window.location.href = id;
      return;
    }
    const element = document.querySelectorAll(id);
    console.log(element[0]);

    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element[0].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className="w-full h-auto bg-charcoal flex flex-col relative items-center justify-center top-0 z-1 py-12 px-11"
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
              anoth={{ isIconHover: hoverLogoName === "me" }}
              key="1"
            />,
          ],
          [
            "repository",
            "https://github.com/Kbgjtn",
            <GithubLogoSvg key="2" title={hoverLogoName} />,
          ],
          [
            "book",
            "#reading-list",
            <BookIcon
              props={{ className: clsx(`h-9 w-9`) }}
              anoth={{ isIconHover: hoverLogoName === "book" }}
              key="3"
            />,
          ],
          [
            "project",
            "#project-list",

            <ProjectListIcon
              props={{ className: clsx(`h-9 w-9`) }}
              anoth={{ isIconHover: hoverLogoName === "project" }}
              key="4"
            />,
          ],
        ].map(([title, url, svg]) => (
          <div
            onClick={() => handleClickScroll(url as string)}
            onMouseEnter={() => setHoverLogoName(`${title}`)}
            onMouseLeave={() => setHoverLogoName("")}
            draggable={false}
            key={`${title}`}
            style={{ transition: "500ms" }}
            title={title as string}
          >
            {svg}
          </div>
        ))}
      </motion.dl>
      {hoverLogoName ? (
        <motion.div
          className="text-center font-normal text-xs absolute top-28 mx-auto opacity-30"
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
