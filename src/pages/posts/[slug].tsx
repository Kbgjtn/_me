import Code from "@/components/mdx/Code";
import { CodeWithinTitle } from "@/components/mdx/CodeWithinTitle";
import { Heading } from "@/components/mdx/Heading";
import { Highlight } from "@/components/mdx/Highlight";
import { Mdx } from "@/components/mdx/Mdx";
import { getLayout } from "@/layouts/test";
import Sparkles from "@/components/shared/sparkles";
import { getPostData, getPosts } from "@/lib/post";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import Image from "next/image";
import {
  DetailedHTMLProps,
  HTMLAttributes,
  useCallback,
  useEffect,
  useMemo,
} from "react";

type HeadingComponentProps = {
  readonly children: string;
};

type ImageProps = {
  readonly src: string;
  readonly alt: string;
  readonly width: string;
  readonly height: string;
};

function Post({ content, meta }: { content: any; meta: any }) {
  const url = `https://www.coocobolo.com/posts/${meta.slug}`;
  const getHeadingProps = useCallback(
    ({ children }: HeadingComponentProps) => {
      return {
        slug: children,
        url,
      };
    },
    [url]
  );

  const customMdxComponents = useMemo(
    () => ({
      pre: (
        props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>
      ) => {
        return <Code {...props} />;
      },
      h2: (props: HeadingComponentProps) => (
        <Heading headingTag="h2" {...getHeadingProps(props)}></Heading>
      ),
      h3: (props: HeadingComponentProps) => (
        <Heading headingTag="h3" {...getHeadingProps(props)}></Heading>
      ),
      h4: (props: HeadingComponentProps) => (
        <Heading headingTag="h4" {...getHeadingProps(props)}></Heading>
      ),
      h5: (props: HeadingComponentProps) => (
        <Heading headingTag="h5" {...getHeadingProps(props)}></Heading>
      ),
      h6: (props: HeadingComponentProps) => (
        <Heading headingTag="h6" {...getHeadingProps(props)}></Heading>
      ),
      img: ({ alt, src, width, height }: ImageProps) => (
        <Image
          src={src}
          alt={alt ? alt : ""}
          width={width ? parseInt(width) : 300}
          height={height ? parseInt(height) : 300}
        />
      ),
      Sparkles,
      Image,
      CodeWithinTitle,
      Highlight,
    }),
    [getHeadingProps]
  );

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <>
      <Head>
        <title>{meta?.title ?? "My blog"}</title>
      </Head>
      <main>
        <Mdx fronmatter={meta}>
          <MDXRemote {...content} components={{ customMdxComponents }} />
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
  const mdxSource = await serialize(content);

  return {
    props: {
      content: mdxSource,
      meta: meta,
    },
  };
};
