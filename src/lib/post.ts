import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIRECTORY = path.join(process.cwd(), "src/pages/blog");

export interface PostMeta {
  date: string;
  excerpt: string;
  slug: string;
  title: string;
  tags: string[];
}

export interface Post {
  content: string;
  meta: PostMeta;
}

export function getPosts() {
  const allPost = getPostSlugs()
    .map((slug) => getPostData(slug))
    .sort((a, b) => {
      if (a.meta.date > b.meta.date) return 1;
      if (a.meta.date < b.meta.date) return -1;
      return 0;
    })
    .reverse();

  return allPost;
}

export function getPostData(slug: string): Post | never {
  const postDirectory = path.join(POSTS_DIRECTORY, `${slug}.mdx`);
  const source = fs.readFileSync(postDirectory, `utf8`);
  const { content, data } = matter(source);
  return {
    content,
    meta: {
      excerpt: data.excerpt ?? "",
      slug,
      tags: (data.tags ?? []).sort(),
      title: data.title ?? slug,
      date: (data.date ?? new Date()).toString(),
    },
  };
}

export function getPostSlugs(): string[] {
  const postsDirectory = fs.readdirSync(POSTS_DIRECTORY);
  return postsDirectory.map((fileName) => fileName.replace(/\.mdx$/, ""));
}
