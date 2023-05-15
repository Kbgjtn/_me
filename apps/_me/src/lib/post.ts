import { POST_RELATIVE_PATH } from '@/constants';
import { getTimeToRead } from '@/helpers';
import { Post } from '@/types/post';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const absolutePathPost = path.join(process.cwd(), POST_RELATIVE_PATH);

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
   const postDirectory = path.join(absolutePathPost, `${slug}.mdx`);
   const source = fs.readFileSync(postDirectory, 'utf8');
   const { content, data } = matter(source);
   const timeToRead = getTimeToRead(content, 200);

   return {
      content,
      meta: {
         excerpt: data.excerpt ?? '',
         slug,
         author: data.author ?? 'unknown',
         image: data.image ?? '',
         tags: (data.tags ?? []).sort(),
         title: data.title ?? slug,
         timeToRead: timeToRead ?? '-',
         date: (data.date ?? new Date()).toString(),
      },
   };
}

export function getPostSlugs(): string[] {
   const postsDirectory = fs.readdirSync(absolutePathPost);
   return postsDirectory.map((fileName) => fileName.replace(/\.mdx$/, ''));
}
