import { memo } from "react";
import Link from "next/link";
import Image from "next/image";

import type { ReactNode } from "react";
import { PostMeta } from "@/types/post";
import clsx from "clsx";
import { Heading } from "./Heading";
import { CalenderIcon, InfoIcon } from "../icons";

type MdxProps = {
  readonly fronmatter: PostMeta;
  readonly children: ReactNode;
};

export const Mdx = memo<MdxProps>(({ fronmatter, children }: MdxProps) => {
  const { title, image, date } = fronmatter;

  return (
    <article
      className={clsx(
        "flex w-full items-center justify-center flex-col mx-auto px-8"
      )}
    >
      <header className={clsx("mt-8 mb-12")}>
        <div className={clsx("flex flex-col justify-center items-center ")}>
          <h1
            className={clsx("text-5xl text-center font-extrabold  rounded-lg ")}
          >
            {title}
          </h1>
          <div className="flex w-full items-center justify-center gap-8">
            <div className="flex items-center justify-center gap-4">
              <CalenderIcon props={{ className: "h-6 w-6" }} anoth={{}} />
              <p>{date}</p>
            </div>
            <div className="flex items-center justify-center gap-4">
              <InfoIcon className={"h-7 w-7"} />
              <p>{10} mins</p>
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
          "prose-pre:bg-[#111111] prose-pre:font-mono prose-pre:font-medium prose-pre:text-lg",
          "prose-li:text-[#111111] prose-li:",
          "marker:prose-ul:text-[#111111]",
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
          "dark:prose-pre:shadow-sm dark:prose-pre:border-[1px] dark:prose-pre:border-[#252525] dark:prose-pre:shadow-[#212121] dark:prose-pre:bg-[#191919]",
          "dark:prose-headings:text-[#B2B2B2]",
          "dark:marker:prose-ul:text-[#B2B2B2]",
          "dark:prose-p:text-[#DDDDDD]",
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
