/* eslint-disable react/display-name */
import { memo } from 'react';
import type { ReactNode } from 'react';
import type { Heading as HeadingTag } from '@/types';

type HeadingProps = {
   children: ReactNode;
   tag: HeadingTag;
   beforeContent?: string;
};

export const Heading = memo(
   ({ children, tag: Tag = 'h1', beforeContent }: HeadingProps) => {
      return (
         <Tag data-before-content={beforeContent || children} className={''}>
            {children}
         </Tag>
      );
   }
);
