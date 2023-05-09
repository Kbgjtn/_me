import { BookReaderIcon, CalenderIcon } from "@/components/icons";
import ScrollProgressY from "@/components/modules/scrollProgress/scrollProgress";
import Book from "@/components/templates/book/book";
import Footer from "@/components/templates/footer/footer";
import Me from "@/components/templates/home/me";
import Project from "@/components/templates/project/project";
import { getPosts } from "@/lib/post";
import clsx from "clsx";
import { motion, useInView } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import templatePhoto from "../../public/photo_test.png";
import { useRef } from "react";
import { item, list } from "@/helpers/motion";
import { PostMeta } from "@/types/post";

function Main({ posts }: { posts: PostMeta[] }) {
  return (
    <>
      <Head>
        <title>Daffa Requelme</title>
        <meta name="description" content="Naufal Daffa Ryquelme" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Hi, here i'm daffa!" />
        <meta
          property="og:description"
          content="hii, i'm a student at Binus University (Comp. Science), nice to meet you, budz!!:))"
        />
        <meta property="og:url" content="https://coocobolo.com/" />
        <meta property="og:type" content="website"></meta>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="/tortuga.ico" />
      </Head>
      <main className="w-screen h-screen scroll-smooth ">
        <ScrollProgressY />
        <Me />
        <PostPreview posts={posts} />
        <Project />
        <Book />
        <Footer />
      </main>
    </>
  );
}

export default Main;

function PostPreview({ posts }: { posts: PostMeta[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      id="blogpost"
      className={clsx(
        "flex flex-col w-screen h-auto justify-start items-center gap-16"
      )}
    >
      <h1 className={clsx("font-bold text-8xl")}>Blog</h1>
      <motion.ul
        ref={ref}
        initial="hidden"
        animate={`${isInView ? "visible" : "hidden"}`}
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
              "p-5  border-2 border-[#1c1c1c] rounded-[44px] ",
              "shadow-black shadow-lg"
            )}
          >
            <Image
              className={clsx(
                "object-cover max-w-md w-full h-auto",
                "grayscale hover:grayscale-0"
              )}
              src={templatePhoto}
              alt={post.title}
              placeholder="blur"
              crossOrigin="anonymous"
              priority
              loading="eager"
            />
            <div
              className={clsx(
                "relative max-h-16 h-full font-semibold overflow-y-hidden ",
                "text-xl text-ellipsis"
              )}
            >
              <Link
                href={`/blog`}
                className={clsx("relative hover:underline underline-offset-2")}
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
      <div className={clsx("max-h-12 max-w-xs")}>
        <button
          className={clsx(
            "w-28 h-12 border-2 border-[#1c1c1c] rounded-lg  mx-auto",
            "font-semibold text-md",
            "hover:bg-[#1A1A1A]"
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

export async function getStaticProps() {
  const posts = getPosts()
    .slice(0, 9)
    .map((post) => post.meta);
  return { props: { posts } };
}
