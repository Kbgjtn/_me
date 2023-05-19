import Head from 'next/head';
import { getPosts } from '@/lib/post';
import { PostMeta } from '@/types/post';
import PostPreview from '@/components/postPreview';
import { getLayout } from '@/layouts/BlogLayout';
import { NextSeo } from 'next-seo';
import { getHost } from '@/helpers';
import { useTheme } from 'next-themes';

function Posts({ posts }: { posts: PostMeta[] }) {
   const url = `${getHost()}/posts/`;
   const description = 'hii, welcome to my posts blog';
   const { theme } = useTheme();

   return (
      <>
         <Head>
            <title>Posts</title>
            <meta name="description" content="hii, welcome to my posts blog" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1.0"
            />
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

         <NextSeo
            title="My Posts"
            description={description}
            canonical={url}
            themeColor={theme}
            openGraph={{
               type: 'site',
               description: description,
               url,
               title: 'My Posts',
            }}
         />

         <section className="mb-24 min-h-screen">
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
