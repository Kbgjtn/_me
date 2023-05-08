import Head from "next/head";
import Book from "@/components/templates/book/book";
import Footer from "@/components/templates/footer/footer";
import Me from "@/components/templates/home/me";
import Project from "@/components/templates/project/project";
import ScrollProgressY from "@/components/modules/scrollProgress/scrollProgress";
import { PostMeta, getPosts } from "@/lib/post";
import clsx from "clsx";
import Link from "next/link";

export default function Home({ posts }: { posts: PostMeta[] }) {
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
      <main className="w-screen h-screen scroll-smooth">
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

function PostPreview({ posts }: { posts: PostMeta[] }) {
  return (
    <div
      className={clsx(
        "flex flex-col w-full h-auto justify-start items-center gap-6"
      )}
    >
      <h1 className={clsx("font-semibold  text-5xl")}>Blog</h1>
      <ul className={clsx("container list-none px-8 antialiased text-start")}>
        {posts.map((post) => (
          <li
            key={post.slug}
            className={clsx(
              "mb-10 p-4 border-2 border-[#1c1c1c] rounded-lg",
              "shadow-black shadow-lg"
            )}
          >
            <div className={clsx("font-semibold mb-2 text-xl")}>
              <Link
                href={`/blog/${post.slug}`}
                className={clsx("hover:underline underline-offset-2")}
              >
                {post.title}
              </Link>
            </div>
            <p className="text-[12px]">{post.excerpt}</p>
            <p
              className={clsx(
                "font-semibold text-[12px] mt-2 inline-flex flex-wrap"
              )}
            >
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tags/${tag}`}
                  className="text-ellipsis pr-2"
                >
                  {"#" + tag}
                </Link>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getPosts()
    .slice(0, 9)
    .map((post) => post.meta);
  console.log({ posts });
  return { props: { posts } };
}
