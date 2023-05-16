import clsx from 'clsx';
import { ComponentProps, FC, ReactNode, useRef } from 'react';

type ComponentsPopOver = 'button' | 'svg' | 'div' | 'input';

interface Props {
   children: ReactNode;
   tooltip?: string;
}

const PopOver: FC<Props> = ({ children, tooltip }): JSX.Element => {
   const tooltipRef = useRef<HTMLSpanElement>(null);
   const container = useRef<HTMLDivElement>(null);

   return (
      <div
         ref={container}
         onMouseEnter={({ clientX }) => {
            if (!tooltipRef.current || !container.current) return;
            const { left } = container.current.getBoundingClientRect();
            tooltipRef.current.style.left = clientX - left + 'px';
         }}
         className={clsx('group relative inline-block')}
         tabIndex={0}
         data-te-toggle="popover"
         data-te-trigger="hover focus"
         data-te-content="Disabled popover"
      >
         {children}
         {tooltip ? (
            <span
               ref={tooltipRef}
               className="invisible absolute top-full mt-2 whitespace-nowrap rounded bg-blue-500 p-1 text-white opacity-0 transition group-hover:visible group-hover:opacity-100"
            >
               {tooltip}
            </span>
         ) : null}
      </div>
   );
};

export default PopOver;
