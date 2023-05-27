import Head from "@/components/head";
import { getPosts } from "@/lib/post";
import { PostMeta } from "@/types/post";
import PostPreview from "@/components/postPreview";
import { getLayout } from "@/layouts/BlogLayout";
import { NextSeo } from "next-seo";
import { getHost } from "@/helpers";
import useCurrentTheme from "@/hooks/useCurrentTheme";

function Posts({ posts }: { posts: PostMeta[] }) {
   const url = `${getHost()}/posts/`;
   const description = "hii, welcome to my posts blog";
   const { theme } = useCurrentTheme();

   return (
      <>
         <Head
            title={"Posts"}
            description={description}
            ogImage={`${getHost()}/og_posts_me.png`}
            override
         />
         <NextSeo
            title="My Posts"
            description={description}
            canonical={url}
            themeColor={theme}
            openGraph={{
               type: "site",
               description: description,
               url,
               title: "My Posts",
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
