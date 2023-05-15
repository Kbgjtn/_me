import { BookIcon, GithubIcon, MeIcon, PostsIcon } from '@/components/icons';
import NavBar from '@/components/modules/navbar/navigation-bar';
import Footer from '@/components/templates/footer/footer';
import clsx from 'clsx';
import type { ReactNode } from 'react';

import type { PropsWithChildren } from 'react';

function BlogLayout({ children }: PropsWithChildren) {
   return (
      <>
         <header>
            <NavBar items={navLinkItem} />
         </header>
         <main className="flex min-h-screen flex-col">{children}</main>
         <footer>
            <Footer />
         </footer>
      </>
   );
}

const navLinkItem = [
   {
      title: 'home',
      href: 'https://www.coocobolo.com',
      icon: (
         <MeIcon
            props={{
               className: clsx(`h-9 w-9 transition-all`),
            }}
            anoth={{ isIconHover: false }}
            key="1"
         />
      ),
   },
   {
      title: 'posts',
      href: 'https://www.coocobolo.com/posts',
      icon: (
         <PostsIcon
            key="2"
            props={{
               className: clsx(`h-8 w-8 dark:fill-charcoal fill-[#AAAAAA]`),
            }}
            anoth={{ isIconHover: false }}
         />
      ),
   },
];

export const getLayout = (page: ReactNode) => <BlogLayout>{page}</BlogLayout>;

export default BlogLayout;
