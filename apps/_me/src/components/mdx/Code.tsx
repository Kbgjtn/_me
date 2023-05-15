import useCopyableRef from '@/hooks/useCopyableRef';
import clsx from 'clsx';
import {
   DetailedHTMLProps,
   HTMLAttributes,
   isValidElement,
   useRef,
   useCallback,
} from 'react';
import { CodeHeader } from './CodeHeader';

function Code(
   props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>
) {
   const preRef = useRef<HTMLPreElement | null>(null);
   const { isCopied, copy } = useCopyableRef<HTMLPreElement>(preRef);

   const getCodeTitle = useCallback(() => {
      if (isValidElement(props.children)) {
         if ('data-title' in props.children.props) {
            return props.children.props['data-title'] as string;
         }
         return undefined;
      }

      return undefined;
   }, [props.children]);

   return (
      <article className={clsx('')}>
         <CodeHeader
            code={preRef.current?.textContent}
            onCopy={copy}
            isCopied={isCopied}
            title={getCodeTitle()}
         />

         <pre ref={preRef} {...props}>
            {isValidElement(props.children) && (
               <code {...props.children.props} />
            )}
         </pre>
      </article>
   );
}

export default Code;
