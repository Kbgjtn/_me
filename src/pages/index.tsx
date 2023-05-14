import Head from "next/head";
import { getPosts } from "@/lib/post";
import { PostMeta } from "@/types/post";
import Me from "@/components/templates/home/me";
import Book from "@/components/templates/book/book";
import Footer from "@/components/templates/footer/footer";
import PostPreview from "@/components/postPreview";

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

      <section className="min-h-screen">
        <Me />
      </section>
      <section className="min-h-screen ">
        <PostPreview posts={posts} />
      </section>
      <section className="min-h-screen">
        <Book />
      </section>
    </>
  );
}

export default Main;

export async function getStaticProps() {
  const posts = getPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { posts } };
}
