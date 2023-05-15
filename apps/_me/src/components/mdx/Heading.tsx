import type { Heading as HeadingVariant } from '@/types';
import clsx from 'clsx';
import Link from 'next/link';
import { memo, ReactNode } from 'react';
import slugify from 'slugify';

type HeadingProps = {
   readonly slug: string;
   readonly headingTag: HeadingVariant;
   readonly url: string;
};

export const Heading = memo(({ headingTag: Tag, slug, url }: HeadingProps) => {
   const id = slugify(slug, { lower: true });

   return (
      <Tag
         id={id}
         data-ss={slug}
         data-ss-mt={96}
         className={clsx('mdx-heading mdx-heading--h2')}
      >
         <Link
            id={id}
            className={clsx('')}
            href={`${url}/#${id}`}
            aria-hidden={true}
            tabIndex={-1}
         >
            <span></span>
         </Link>
         {slug}
      </Tag>
   );
});

Heading.displayName = 'Heading';
