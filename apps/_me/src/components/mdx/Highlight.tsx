import clsx from 'clsx';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { memo } from 'react';

type HighlightProps = {
   readonly title: string;
   readonly children: ReactNode;
};

export const Highlight = memo(({ title, children }: HighlightProps) => {
   return (
      <aside className={clsx('')}>
         <div className={clsx('')}>
            <Image src={``} width={30} height={30} alt="" />
         </div>
         <strong className={clsx('')}>{title}</strong>
         {children}
      </aside>
   );
});

Highlight.displayName = 'Highlight';
