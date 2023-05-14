import { memo } from "react";
import Image from "next/image";
import { PostMeta } from "@/types/post";
import clsx from "clsx";
import { CalenderIcon, BookReaderIcon } from "../icons";

import type { ReactNode } from "react";

type MdxProps = {
  readonly fronmatter: PostMeta;
  readonly children: ReactNode;
};

export const Mdx = memo<MdxProps>(({ fronmatter, children }: MdxProps) => {
  const { title, image, date, timeToRead } = fronmatter;

  return (
    <article
      className={clsx(
        "flex w-full items-center justify-center flex-col mx-auto px-8"
      )}
    >
      <header className={clsx("mt-8 mb-12")}>
        <div className={clsx("flex flex-col justify-center items-center ")}>
          <h1
            className={clsx(
              "text-5xl text-center font-extrabold rounded-lg",
              "lg:text-6xl",
              "xl:text-6xl",
              "2xl:text-7xl",
              "3xl:text-7xl"
            )}
          >
            {title}
          </h1>
          <div className="flex w-full items-center justify-center gap-8">
            <div
              className="flex items-center justify-center gap-2"
              title={"latest updated: " + date}
            >
              <CalenderIcon props={{ className: "h-6 w-6" }} anoth={{}} />
              <p>{`${new Date(date).toDateString()}`}</p>
            </div>
            <div
              className="flex items-center justify-center gap-2"
              title={"The avarage time for reading this post is: " + timeToRead}
            >
              <BookReaderIcon props={{ className: "h-7 w-7" }} />
              <p>{timeToRead} min(s)</p>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            "container flex self-center justify-center content-center m-auto max-w-7xl mt-8 rounded-xl bg-current shadow-[#111111] shadow-md",
            "sm:w-[480px]",
            "md:w-[520px]",
            "lg:w-[640px]",
            "dark:shadow-[#202020] "
          )}
        >
          <Image
            className={clsx(
              "relative object-cover w-full h-full object-center rounded-xl"
            )}
            src={image ?? ""}
            title={title}
            draggable={false}
            alt="image-post"
            loading="eager"
            width={800}
            height={800}
          />
        </div>
      </header>
      <section
        className={clsx(
          "prose prose-sm text-[#111111] mb-32",
          "prose-pre:bg-[#444444] prose-pre:font-mono prose-pre:rounded-xl prose-pre:font-medium prose-pre:text-lg",
          "prose-li:text-[#111111]",
          "prose-hr:border-[#111111]",
          "marker:prose-ul:text-[#111111]",
          "marker:prose-ol:text-[#111111]",
          "prose-a:text-[#252525] prose-a:no-underline hover:prose-a:text-black",
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
        )}
      >
        {children}
      </section>
    </article>
  );
});
