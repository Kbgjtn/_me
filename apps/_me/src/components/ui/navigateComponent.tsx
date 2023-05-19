import { navigateComponent } from '@/helpers/navigate';
import clsx from 'clsx';

export interface IPropsNavigate extends ScrollOptions {
   id: string;
   text?: TextStyleOption;
}

type TextStyleOption = '↓' | '|';

function NavigateComponent(props: IPropsNavigate) {
   return (
      <div
         className={clsx(
            'group absolute bottom-48 cursor-pointer max-sm:bottom-44'
         )}
      >
         <div
            className={clsx(
               'flex h-5 w-5 items-center justify-center',
               'animate-bounce'
            )}
            onClick={() => navigateComponent({ ...props })}
         >
            <span
               className={clsx(
                  'absolute inline-flex h-7 w-3 animate-ping rounded-full bg-[#1c1c1c] shadow-sm',
                  'dark:bg-[#f3f3f3]'
               )}
            />
            <span
               className={clsx(
                  'relative inline-flex h-10 w-4 items-center justify-center self-center rounded-full bg-[#5A5A5A] opacity-50',
                  'text-center text-sm font-medium',
                  'dark:bg-[#3c3c3c]'
               )}
            >
               {props.text}
            </span>
         </div>
      </div>
   );
}

export default NavigateComponent;
