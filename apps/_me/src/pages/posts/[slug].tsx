import Code from "@/components/mdx/Code";
import { CodeWithinTitle } from "@/components/mdx/CodeWithinTitle";
import { H2, H3 } from "@/components/mdx/Heading";
import { Highlight } from "@/components/mdx/Highlight";
import { Mdx } from "@/components/mdx/Mdx";
import { getLayout } from "@/layouts/BlogLayout";
import { getPostData, getPosts } from "@/lib/post";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { NextSeo } from "next-seo";
import Head from "@/components/head";
import Image from "@/components/mdx/Image";
import remarkGfm from "remark-gfm";
import rehypePlugins from "rehype-plugins";
import { useEffect } from "react";
import { PostMeta } from "@/types/post";
import { useTheme } from "next-themes";
import { getHost } from "@/helpers";
import { Link } from "@/components/mdx/Link";
import { Hr } from "@/components/mdx/Hr";
import { Table } from "@/components/mdx/Table";
import Labels from "@/components/mdx/Labels";

function Post({ content, meta }: { content: any; meta: PostMeta }) {
   const url = `${getHost()}/posts/${meta.slug}`;
   const articleImage = `${getHost()}${meta.image}`;
   const { theme } = useTheme();

   useEffect(() => {
      window.history.scrollRestoration = "manual";
   }, []);

   return (
      <>
         <Head
            title={meta.title}
            description={meta.excerpt}
            ogImage={`${getHost()}/og_posts_me.png`}
            override
         />

         <NextSeo
            title={meta.title}
            description={meta.excerpt}
            canonical={url}
            themeColor={theme}
            openGraph={{
               type: "article",
               article: {
                  publishedTime: `${new Date(meta.date).toDateString()}`,
               },
               description: meta.excerpt,
               url,
               title: meta.title,
               images: [
                  {
                     url: articleImage,
                     alt: meta.title,
                     width: 1200,
                     height: 860,
                  },
               ],
            }}
         />
         <main>
            <Mdx fronmatter={meta}>
               <MDXRemote
                  {...content}
                  lazy
                  components={{
                     pre: Code,
                     h1: H2,
                     h2: H2,
                     h3: H3,
                     link: Link,
                     a: Link,
                     hr: Hr,
                     table: Table,
                     Image,
                     label: Labels,
                  }}
               />
            </Mdx>
         </main>
      </>
   );
}

Post.getLayout = getLayout;
export default Post;

export const getStaticPaths = async () => {
   const posts = getPosts();
   const paths = posts.map((post) => ({ params: { slug: post.meta.slug } }));

   return {
      paths,
      fallback: false,
   };
};

export const getStaticProps = async ({ params }: { params: any }) => {
   const { content, meta } = getPostData(params.slug);
   const mdxSource = await serialize(content, {
      mdxOptions: {
         rehypePlugins: [rehypePlugins],
         remarkPlugins: [remarkGfm],
      },
   });

   return {
      props: {
         content: mdxSource,
         meta: meta,
      },
   };
};
