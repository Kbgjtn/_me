import clsx from 'clsx';
import { memo } from 'react';
import type { ReactNode } from 'react';

type SparklesProps = {
   children: ReactNode;
};

const Sparkles = memo<SparklesProps>(({ children }) => {
   return (
      <span className={clsx('')}>
         <strong>{children}</strong>
      </span>
   );
});

Sparkles.displayName = 'Sparkles';
export default Sparkles;
