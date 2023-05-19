import Head from 'next/head';
import { getPosts } from '@/lib/post';
import { PostMeta } from '@/types/post';
import Me from '@/components/templates/home/me';
import Book from '@/components/templates/book/book';
import PostPreview from '@/components/postPreview';
import { getHost } from '@/helpers';
import { useTheme } from 'next-themes';
import { NextSeo } from 'next-seo';

function Main({ posts }: { posts: PostMeta[] }) {
   const url = `${getHost()}/`;
   const title = 'Daffa Requelme';
   const description =
      "hii, i'm a student at Binus University (Comp. Science), nice to meet you, budz!!:))";
   const { theme } = useTheme();

   return (
      <>
         <Head>
            <title>{title}</title>
            <meta
               name="description"
               content="Coocobolo | Naufal Daffa Requelme"
            />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1.0"
            />
            <meta property="og:title" content="Hi, here i'm daffa!" />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website"></meta>
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <link rel="icon" href="/tortuga.ico" />
         </Head>
         <NextSeo
            title={title}
            description={description}
            canonical={url}
            themeColor={theme}
            openGraph={{
               type: 'website',
               description: description,
               url,
               title: title,
            }}
         />

         <section className="min-h-screen">
            <Me />
         </section>
         <section className="min-h-screen">
            <PostPreview posts={posts} enableShowMore={true} />
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
