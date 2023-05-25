import { BookReaderIcon, CalenderIcon } from "@/components/icons";
import { item, list } from "@/helpers/motion";
import { PostMeta } from "@/types/post";
import clsx from "clsx";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

function PostPreview({
   posts,
   enableShowMore = false,
   limit = 999,
}: {
   posts: PostMeta[];
   enableShowMore?: boolean;
   limit?: number;
}) {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });

   return (
      <motion.div
         id="blogpost"
         ref={ref}
         className={clsx(
            "flex min-h-screen w-screen flex-col items-center justify-start gap-16"
         )}
      >
         <h1
            className={clsx(
               "text-center text-6xl font-semibold sm:p-5 sm:text-6xl md:p-6 md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-8xl"
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
                  "container mx-auto grid list-none grid-cols-1 gap-x-6 gap-y-8 px-20",
                  "md:grid-cols-2",
                  "lg:grid-cols-3",
                  "xl:grid-cols-3",
                  "2xl:grid-cols-3",
                  "3xl:grid-cols-3"
               )}
            >
               {posts.map(
                  (post, index) =>
                     index < limit && (
                        <motion.li
                           variants={item}
                           key={post.slug}
                           className={clsx(
                              "container mx-auto flex min-w-full max-w-md flex-col gap-3",
                              "rounded-[44px] border-2 border-[#484848] bg-[#8B8B8B] p-5",
                              "shadow-sm shadow-[#1c1c1c]",
                              "dark:bg-charcoal dark:border-[#292929]"
                           )}
                        >
                           <div className="flex h-full max-h-[200px] w-full max-w-lg items-center justify-center">
                              <Image
                                 className={clsx(
                                    "h-full w-full self-center rounded-3xl object-cover object-center",
                                    "grayscale hover:grayscale-0"
                                 )}
                                 src={post.image}
                                 alt={post.title}
                                 draggable={false}
                                 crossOrigin="anonymous"
                                 priority
                                 width="1200"
                                 height="1200"
                                 quality={100}
                                 loading="eager"
                                 referrerPolicy="no-referrer"
                              />
                           </div>
                           <div
                              className={clsx(
                                 "relative h-full max-h-16 overflow-y-hidden font-semibold",
                                 "text-ellipsis text-xl"
                              )}
                           >
                              <Link
                                 href={"posts/" + (post.slug ?? post.title)}
                                 className={clsx(
                                    "hover relative",
                                    "hover:text-silversand_tints-700 no-underline"
                                 )}
                              >
                                 {post.title}
                              </Link>
                           </div>

                           <div className="h-full text-ellipsis text-sm">
                              <p className="mb-2">
                                 {post.excerpt.slice(0, 100) + ".."}
                              </p>
                           </div>

                           <div
                              className={clsx(
                                 "mb-4 flex h-auto w-full flex-col items-start justify-center"
                              )}
                           >
                              <div
                                 className={clsx(
                                    `inline-flex items-center gap-2 justify-self-end`
                                 )}
                              >
                                 <CalenderIcon
                                    props={{ className: clsx(`h-4 w-4`) }}
                                 />

                                 <p className="text-sm">{`${new Date(
                                    post.date
                                 ).toDateString()}`}</p>
                              </div>
                              <div
                                 className={clsx(
                                    `inline-flex content-end items-center gap-2 justify-self-end `
                                 )}
                              >
                                 <BookReaderIcon
                                    props={{ className: clsx(`h-5 w-5`) }}
                                 />
                                 <p className="text-sm">
                                    {post.timeToRead} min(s)
                                 </p>
                              </div>
                           </div>
                        </motion.li>
                     )
               )}
            </motion.ul>
         ) : null}
         {enableShowMore ? (
            <motion.div className={clsx("max-h-12 max-w-xs")}>
               <button
                  className={clsx(
                     "hover:text-silversand_tints-700 mx-auto h-12 w-32 rounded-lg border-2 border-[#484848]",
                     "text-md font-semibold shadow-sm shadow-[#1c1c1c]",
                     "dark:border-[#292929]"
                  )}
                  type="button"
                  onClick={() => {
                     window.location.href = "/posts";
                  }}
               >
                  See More
               </button>
            </motion.div>
         ) : null}
      </motion.div>
   );
}

export default PostPreview;
