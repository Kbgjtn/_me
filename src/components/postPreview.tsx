import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";
import { PostMeta } from "@/types/post";
import { item, list } from "@/helpers/motion";
import Image from "next/image";
import Link from "next/link";
import postPhotoDummy from "../../public/photo_test.png";
import { BookReaderIcon, CalenderIcon } from "@/components/icons";

function PostPreview({ posts }: { posts: PostMeta[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      id="blogpost"
      ref={ref}
      className={clsx(
        "flex flex-col w-screen h-screen justify-start items-center gap-16"
      )}
    >
      <h1 className={clsx("font-bold text-8xl")}>Blog</h1>

      {isInView ? (
        <motion.ul
          initial="hidden"
          animate={"visible"}
          variants={list}
          className={clsx(
            "container list-none px-16 antialiased text-start grid grid-cols-1 gap-y-8 gap-x-6 ",
            "md:grid-cols-2",
            "lg:grid-cols-3",
            "xl:grid-cols-4",
            "2xl:grid-cols-4",
            "3xl:grid-cols-4"
          )}
        >
          {posts.map((post) => (
            <motion.li
              variants={item}
              key={post.slug}
              className={clsx(
                "w-full h-full inline-flex flex-col gap-3",
                "p-5 border-2 border-[#484848] rounded-[44px]",
                "shadow-[#1c1c1c] shadow-lg",
                "dark:border-[#292929]"
              )}
            >
              <Image
                className={clsx(
                  "object-cover max-w-md w-full h-auto",
                  "grayscale hover:grayscale-0"
                )}
                src={postPhotoDummy}
                alt={post.title}
                placeholder="blur"
                crossOrigin="anonymous"
                priority
                loading="eager"
              />
              <div
                className={clsx(
                  "relative max-h-16 h-full font-semibold overflow-y-hidden",
                  "text-xl text-ellipsis"
                )}
              >
                <Link
                  href={`/blog`}
                  className={clsx(
                    "relative hover:underline underline-offset-2"
                  )}
                >
                  {post.title}
                </Link>
              </div>
              <div className="max-h-20 h-full overflow-hidden text-xs text-ellipsis">
                {post.excerpt}
              </div>

              <div className="w-full flex items-center justify-start gap-4 mb-4">
                <div
                  className={clsx(
                    `justify-self-end inline-flex items-center gap-2`
                  )}
                >
                  <CalenderIcon props={{ className: clsx(`h-4 w-4`) }} />

                  <p className="text-[12px]">{`${new Date(
                    post.date
                  ).toDateString()}`}</p>
                </div>
                <div
                  className={clsx(
                    `justify-self-end content-end inline-flex items-center gap-2 `
                  )}
                >
                  <BookReaderIcon props={{ className: clsx(`h-5 w-5`) }} />
                  <p className="text-[12px]">{`10 Mins`}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      ) : null}
      <div className={clsx("max-h-12 max-w-xs")}>
        <button
          className={clsx(
            "w-32 h-12 border-2 border-[#484848] rounded-lg mx-auto",
            "font-semibold text-md shadow-[#1c1c1c] shadow-sm",
            "dark:border-[#292929]"
          )}
          type="button"
          onClick={() => {}}
        >
          {"See More"}
        </button>
      </div>
    </motion.div>
  );
}

export default PostPreview;
