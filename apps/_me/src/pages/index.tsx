import { getPosts } from "@/lib/post";
import { PostMeta } from "@/types/post";
import Me from "@/components/templates/home/me";
import Book from "@/components/templates/book/book";
import PostPreview from "@/components/postPreview";
import { getHost } from "@/helpers";
import { useTheme } from "next-themes";
import { NextSeo } from "next-seo";
import Head from "@/components/head";

function Main({ posts }: { posts: PostMeta[] }) {
   const url = `${getHost()}/`;
   const title = "Daffa Requelme";
   const description =
      "hii, i'm a student at Binus University (Comp. Science), nice to meet you, budz!";
   const { theme } = useTheme();

   return (
      <>
         <Head
            title={title}
            description={description}
            ogImage={`${getHost()}/og_me.png`}
            override
         />
         <NextSeo
            title={title}
            description={description}
            canonical={url}
            themeColor={theme}
            openGraph={{
               type: "website",
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
      .slice(0, 6)
      .map((post) => post.meta);

   return { props: { posts } };
}
