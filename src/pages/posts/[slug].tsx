import { getPostData, getPosts } from "@/lib/post";
import clsx from "clsx";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import Image from "next/image";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

function Post({ content, meta }: { content: any; meta: any }) {
  return (
    <>
      <Head>
        <title>{meta?.title ?? "My blog"}</title>
      </Head>
      <div
        className={clsx(
          "flex  min-h-screen relative items-center justify-center m-0-auto ",
          "rounded-[4px]"
        )}
      >
        <div className="max-w-[80vw] p-8">
          <MDXRemote {...content} components={{ Image }} />
        </div>
      </div>
    </>
  );
}

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
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ["anchor"] },
          },
          { behaviour: "wrap" },
        ],
        rehypeHighlight,
        rehypeCodeTitles,
      ],
    },
  });

  return {
    props: {
      content: mdxSource,
      meta: meta,
    },
  };
};
