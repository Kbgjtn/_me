import Head from "next/head";
import { getPosts } from "@/lib/post";
import { PostMeta } from "@/types/post";
import PostPreview from "@/components/postPreview";
import { getLayout } from "@/layouts/BlogLayout";

function Posts({ posts }: { posts: PostMeta[] }) {
  return (
    <>
      <Head>
        <title>Posts</title>
        <meta name="description" content="Naufal Daffa Ryquelme" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="My Posts" />
        <meta
          property="og:description"
          content="hii, welcome to my posts blog"
        />
        <meta property="og:url" content="https://coocobolo.com/posts" />
        <meta property="og:type" content="website"></meta>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="/tortuga.ico" />
      </Head>

      <section className="min-h-screen mb-24">
        <PostPreview posts={posts} enableShowMore={false} />
      </section>
    </>
  );
}

Posts.getLayout = getLayout;

export default Posts;

export async function getStaticProps() {
  const posts = getPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { posts } };
}
