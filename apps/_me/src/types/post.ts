export interface PostMeta {
   date: string;
   excerpt: string;
   slug: string;
   title: string;
   tags: string[];
   image: string;
   author: string;
   timeToRead: number | string;
   published: boolean;
}

export interface TimeToReadArgs {
   textStr: string;
   wordsPerMinute: number;
}

export interface Post {
   content: string;
   meta: PostMeta;
}
