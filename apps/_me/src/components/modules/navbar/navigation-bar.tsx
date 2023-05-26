import { motion } from "framer-motion";
import { PropsWithChildren, useState } from "react";
import clsx from "clsx";
import { z } from "zod";
import ThemeToggle from "@/components/ui/themeToggle";

import type { ReactElement } from "react";
import { getHost } from "@/helpers";
import { BookIcon, MeIcon, PostsIcon, WidgetIcon } from "@/components/icons";
import { useKBar } from "kbar";
import ShortcutHome from "@/components/shortcutHome";

export type NavigationLinkItemProps = {
   title: string;
   href: string;
   icon: ReactElement;
};

const urlSchema = z.string().url();

function NavLink({ items }: { items: NavigationLinkItemProps[] }) {
   const [iconHover, setIconHover] = useState<string | null>(null);

   function checkHoverNavLink({ a, b }: { a: string; b: string }) {
      a === b ? setIconHover(a) : null;
   }

   function handleClickScroll(id: string) {
      if (urlSchema.safeParse(id).success) {
         window.location.href = id;
         return;
      }

      const element = document.querySelectorAll(id);

      if (element) {
         element[0].scrollIntoView({ behavior: "smooth" });
      }
   }

   return (
      <motion.ul
         className="font-cascode sticky flex items-center justify-center gap-[2rem] text-xl font-medium text-white xl:text-2xl"
         variants={item}
      >
         {items.map((item: NavigationLinkItemProps, index: number) => (
            <span
               className={clsx("group cursor-pointer")}
               onClick={() => handleClickScroll(item.href)}
               onMouseEnter={() =>
                  checkHoverNavLink({ a: item.title, b: items[index].title })
               }
               onMouseLeave={() => setIconHover(null)}
               draggable={false}
               key={index}
            >
               {item.icon}
            </span>
         ))}

         {iconHover ? (
            <motion.div
               className={clsx(
                  "absolute top-20 mx-auto",
                  "text-center text-sm font-semibold"
               )}
               variants={sentence}
               initial="hidden"
               animate="visible"
            >
               {`./${iconHover}`.split("").map((char, index) => {
                  return (
                     <motion.span
                        className="text-silversand_shades dark:text-white"
                        key={char + "-" + index}
                        variants={letter}
                     >
                        {char}
                     </motion.span>
                  );
               })}
            </motion.div>
         ) : null}
      </motion.ul>
   );
}

function NavPreferences(props: PropsWithChildren) {
   const { query } = useKBar();

   return (
      <ul>
         <li
            className={clsx("translate-x-16 max-md:translate-x-0 max-md:pl-6")}
         >
            <hr
               className={clsx(
                  "border-silversand_shades-900 inset-0 -translate-x-16 translate-y-4 rotate-90 border-[1px]"
               )}
            />

            <kbd
               className={clsx(
                  "group mx-1  rounded-lg px-2.5 py-[0.5px] text-2xl font-semibold",
                  "cursor-pointer select-none",
                  "dark:bg-silversand_shades-900 dark:hover:text-yellow1"
               )}
               draggable={false}
               title={"Quick Access"}
               onClick={query.toggle}
            >
               ⌘
            </kbd>
         </li>
      </ul>
   );
}

function NavBar(props: PropsWithChildren) {
   return (
      <motion.nav
         className={clsx(
            "relative flex items-center justify-center",
            "top-0 h-auto w-full",
            "max-md:px-0 max-md:pb-4",
            "px-10 py-12"
         )}
         initial="hidden"
         animate="show"
      >
         <NavLink items={navLinksItem} />
         <NavPreferences />
      </motion.nav>
   );
}

export default NavBar;

const item = {
   hidden: { opacity: 0 },
   show: { opacity: 1 },
};

const navLinksItem = [
   {
      title: "me",
      href: getHost(),
      icon: (
         <MeIcon
            props={{ className: clsx(`h-9 w-9 transition-all`) }}
            anoth={{ isIconHover: false }}
            key="1"
         />
      ),
   },
   {
      title: "posts",
      href: "#blogpost",
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
   {
      title: "book",
      href: "#reading-list",
      icon: (
         <BookIcon
            props={{
               className: clsx("h-9 w-9"),
            }}
            anoth={{ isIconHover: false }}
            key="3"
         />
      ),
   },
];

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
