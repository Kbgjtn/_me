import { BookIcon, GithubIcon, MeIcon, PostsIcon } from '@/components/icons';
import NavBar from '@/components/modules/navbar/navigation-bar';
import Footer from '@/components/templates/footer/footer';
import { getHost } from '@/helpers';
import clsx from 'clsx';

import type { PropsWithChildren } from 'react';

function CommonLayout({ children }: PropsWithChildren) {
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
      title: 'me',
      href: getHost(),
      icon: (
         <MeIcon
            props={{ className: clsx(`h-9 w-9 transition-all`) }}
            anoth={{ isIconHover: false }}
            key="1"
         />
      ),
   },
   {
      title: 'repository',
      href: 'https://github.com/Kbgjtn',
      icon: (
         <GithubIcon
            key="2"
            props={{ className: clsx(`h-9 w-9`) }}
            anoth={{ isIconHover: false }}
         />
      ),
   },
   {
      title: 'posts',
      href: '#blogpost',
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
   {
      title: 'book',
      href: '#reading-list',
      icon: (
         <BookIcon
            props={{ className: clsx(`h-9 w-9 `) }}
            anoth={{ isIconHover: false }}
            key="3"
         />
      ),
   },
];

export default CommonLayout;
