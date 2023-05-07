import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIRECTORY = path.join(process.cwd(), "src/pages/blog");

interface PostMeta {
  date: string;
  excerpt: string;
  slug: string;
  title: string;
  tags: string[];
}

interface Post {
  content: string;
  meta: PostMeta;
}

export function getPosts() {
  const allPost = getPostSlugs().map((slug) => {
    getPostMeta(slug);
  });
}

export function getPostMeta(slug: string): Post | never {
  const postDirectory = path.join(POSTS_DIRECTORY, `${slug}.mdx`);
  const source = fs.readFileSync(postDirectory, `utf8`);
  const { content, data } = matter(source);
  console.log({ content, data });
  return undefined as never;
}

export function getPostSlugs(): string[] {
  const postsDirectory = fs.readdirSync(POSTS_DIRECTORY);
  return postsDirectory.map((fileName) => fileName.replace(/\.mdx$/, ""));
}
