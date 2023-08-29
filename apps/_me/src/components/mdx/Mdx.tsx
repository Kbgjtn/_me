/* eslint-disable react/display-name */
import { memo } from "react";
import Image from "@/components/mdx/Image";
import { PostMeta } from "@/types/post";
import clsx from "clsx";
import { CalenderIcon, BookReaderIcon } from "../icons";

import type { ReactNode } from "react";

type MdxProps = {
   readonly fronmatter: PostMeta;
   readonly children: ReactNode;
};

export const Mdx = memo<MdxProps>(({ fronmatter, children }: MdxProps) => {
   const { title, image, date, timeToRead, author } = fronmatter;

   return (
      <article
         className={clsx(
            "mdx-contents mx-auto flex w-full flex-col items-center justify-center px-8"
         )}
      >
         <header className={clsx("mb-12 mt-8")}>
            <div
               className={clsx(
                  "flex flex-col items-center justify-center gap-4"
               )}
            >
               <div className="container max-w-4xl overflow-hidden text-ellipsis">
                  <h1
                     className={clsx(
                        "rounded-lg text-center font-extrabold",
                        "text-7xl max-md:text-4xl "
                     )}
                  >
                     {title}
                  </h1>
               </div>
               <div className="flex w-full items-center justify-center gap-8">
                  <div
                     className="flex items-center justify-center gap-2"
                     title={"latest updated: " + date}
                  >
                     <CalenderIcon
                        props={{ className: "h-6 w-6" }}
                        anoth={{}}
                     />
                     <p>{`${new Date(date).toDateString()}`}</p>
                  </div>
                  <div
                     className="flex items-center justify-center gap-2"
                     title={
                        "The avarage time for reading this post is: " +
                        timeToRead
                     }
                  >
                     <BookReaderIcon props={{ className: "h-7 w-7" }} />
                     <p>{timeToRead} min(s)</p>
                  </div>
               </div>
               <div className="text-sm">by: {author}</div>
            </div>
            <div
               className={clsx(
                  "container flex content-center items-center justify-center",
                  "max-w-4xl"
               )}
            >
               <Image
                  className={clsx(
                     "relative h-auto w-full rounded-xl object-cover object-center "
                  )}
                  src={image}
                  title={title}
                  draggable={false}
                  alt="unable to load image post"
                  loading="eager"
                  width={1800}
                  height={1800}
                  onContextMenu={(e) => e.preventDefault()}
               />
            </div>
         </header>
         <section className={clsx("container mx-auto max-w-4xl ", "mb-32")}>
            {children}
         </section>
      </article>
   );
});

/* className={clsx( "not-prose prose-sm mb-32 text-[#111111]", "prose-pre:bg-[#444444] prose-pre:font-mono prose-pre:rounded-xl prose-pre:font-medium prose-pre:text-lg", "prose-pre:not-prose", "dark:prose-pre:not-prose", "prose-code:not-prose", "dark:prose-code:not-prose", "prose-li:text-[#111111]", "prose-hr:border-[#111111]", "prose-headings:text-[#111111]", "marker:prose-ul:text-[#111111]", "marker:prose-ol:text-[#111111]",
               "prose-a:text-[#444444] prose-a:no-underline hover:prose-a:text-[#ffd100]",
               "prose-strong:text-[#000000]",
               "prose-p:font-medium",
               "prose-blockquote:border-black",
               "sm:prose-sm",
               "md:prose-md",
               "lg:prose-lg",
               "xl:prose-xl",
               "2xl:prose-2xl",
               "3xl:prose-3xl",
               "dark:prose-invert dark:prose-indigo",
                "dark:prose-pre:shadow-sm dark:prose-pre:rounded-xl dark:prose-pre:border-[1px] dark:prose-pre:border-[#252525] dark:prose-pre:shadow-[#212121] dark:prose-pre:bg-[#191919]", 
               "dark:prose-headings:text-[#B2B2B2]",
               "dark:marker:prose-ul:text-[#B2B2B2]",
               "dark:marker:prose-ol:text-[#B2B2B2]",
               "dark:prose-p:text-[#DDDDDD]",
               "dark:prose-hr:border-[#B2B2B2]",
               "dark:prose-strong:text-[#46B5D1]",
               "dark:prose-a:text-[#f3f3f3] dark:hover:prose-a:text-[#ffd100]",
               "dark:prose-li:text-[#B2B2B2]",
               "dark:prose-img:rounded-xl dark:prose-img:shadow-md",
               "dark:prose-blockquote:border-[#46B5D1]"
            )} */
