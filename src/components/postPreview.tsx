import { BookReaderIcon, CalenderIcon } from "@/components/icons";
import { item, list } from "@/helpers/motion";
import { PostMeta } from "@/types/post";
import clsx from "clsx";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import postPhotoDummy from "../../public/photo_test.png";

function PostPreview({
  posts,
  enableShowMore = false,
}: {
  posts: PostMeta[];
  enableShowMore?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      id="blogpost"
      ref={ref}
      className={clsx(
        "flex flex-col w-screen min-h-full justify-start items-center gap-16"
      )}
    >
      <h1
        className={clsx(
          "text-6xl font-semibold text-center translate-y-12 sm:text-6xl sm:p-5 md:text-7xl md:p-6 lg:text-8xl xl:text-8xl 2xl:text-8xl"
        )}
      >
        Blog
      </h1>

      {isInView ? (
        <motion.ul
          initial="hidden"
          animate={"visible"}
          variants={list}
          className={clsx(
            "container mx-auto list-none px-20 grid grid-cols-1 gap-y-8 gap-x-6",
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
                "container flex flex-col gap-3",
                "p-5 border-2 bg-[#8B8B8B] border-[#484848] rounded-[44px]",
                "shadow-[#1c1c1c] shadow-sm",
                "dark:border-[#292929] dark:bg-charcoal"
              )}
            >
              <div className="flex justify-center items-center max-w-lg w-full h-full max-h-[180px]">
                <Image
                  className={clsx(
                    "object-cover object-center self-center w-full h-full rounded-3xl",
                    "grayscale hover:grayscale-0"
                  )}
                  src={post.image || postPhotoDummy}
                  alt={post.title}
                  crossOrigin="anonymous"
                  priority
                  width="100"
                  height="100"
                  quality={100}
                  loading="eager"
                />
              </div>
              <div
                className={clsx(
                  "relative max-h-16 h-full font-semibold overflow-y-hidden",
                  "text-xl text-ellipsis"
                )}
              >
                <Link
                  href={"posts/" + (post.slug || post.title)}
                  className={clsx(
                    "relative hover",
                    "no-underline hover:text-[#ffd100]"
                  )}
                >
                  {post.title}
                </Link>
              </div>

              <div className="max-h-20 h-full overflow-hidden text-xs text-ellipsis">
                <p className="mb-2">{post.excerpt.slice(0, 92)}</p>
              </div>

              <div
                className={clsx(
                  "w-full h-auto flex flex-col items-start justify-center mb-4"
                )}
              >
                <div
                  className={clsx(
                    `justify-self-end inline-flex items-center gap-2`
                  )}
                >
                  <CalenderIcon props={{ className: clsx(`h-4 w-4`) }} />

                  <p className="text-sm">{`${new Date(
                    post.date
                  ).toDateString()}`}</p>
                </div>
                <div
                  className={clsx(
                    `justify-self-end content-end inline-flex items-center gap-2 `
                  )}
                >
                  <BookReaderIcon props={{ className: clsx(`h-5 w-5`) }} />
                  <p className="text-sm">{post.timeToRead} min(s)</p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      ) : null}
      {enableShowMore ? (
        <motion.div className={clsx("max-h-12 max-w-xs")}>
          <button
            className={clsx(
              "w-32 h-12 border-2 border-[#484848] rounded-lg mx-auto",
              "font-semibold text-md shadow-[#1c1c1c] shadow-sm",
              "dark:border-[#292929]"
            )}
            type="button"
            onClick={() => {
              window.location.href = "/posts";
            }}
          >
            {"See More"}
          </button>
        </motion.div>
      ) : null}
    </motion.div>
  );
}

export default PostPreview;
