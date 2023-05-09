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
