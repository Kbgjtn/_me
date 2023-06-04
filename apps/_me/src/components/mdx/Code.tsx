import clsx from "clsx";
import { PropsWithChildren, useEffect, useRef, useState } from "react";

import { ClipboardIcon } from "@/components/icons";

interface CodeFooterProps {
   lines?: number;
   language?: string;
   selected?: string;
}

function CodeFooter({
   lines = 0,
   language = "",
   selected = "",
}: CodeFooterProps) {
   return (
      <div className={clsx("bg-slate-200/4 flex font-mono")}>
         {selected && <div className={clsx("")}>Selected: {selected}</div>}
         {language && (
            <div className={clsx("mdx-code__footer-item")}>{language}</div>
         )}
         {lines && (
            <div className={clsx("mdx-code__footer-item hidden", "sm:flex")}>
               Lines: {lines}
            </div>
         )}

         <div className={clsx("mdx-code__footer-item")}>UTF-8</div>
      </div>
   );
}

export type CodeProps = CodeFooterProps & {
   withCopyButton?: boolean;
   withFooter?: boolean;
};

function Code({
   lines = 0,
   selected = "",
   withCopyButton = true,
   withFooter = false,
   children = null,
}: PropsWithChildren<CodeProps>) {
   const codeRef = useRef<HTMLPreElement>(null);
   const [isCopied, setCopied] = useState<boolean>(false);
   const [lang, setLang] = useState<string>("");

   const checkLanguage = (language: string) => {
      // @ts-ignore
      const l = children.props.className.split("-")[1].split(" ")[0];
      if (l) {
         setLang(l);
      }
   };

   useEffect(() => {
      if (lang === "") {
         checkLanguage(lang);
      }
      return;
   }, [lang]);

   const copyToClipboard = async () => {
      try {
         const content = codeRef.current.textContent || "";
         await navigator.clipboard.writeText(content);

         if (!isCopied) {
            setCopied(true);
            setTimeout(() => setCopied(false), 1000);
         }
      } catch (err) {
         setCopied(false);
      }
   };

   return (
      <div
         className={clsx(
            "dark:bg-chineseBlack my-6 rounded-lg border-2 bg-[#1c1c1c]",
            "border-charcoal"
         )}
      >
         <div className={"relative p-4"}>
            {withCopyButton && (
               <button
                  type="button"
                  className={clsx(
                     "absolute right-4 top-4 rounded-md border-2 p-1 ",
                     "border-silversand_tints"
                  )}
                  onClick={copyToClipboard}
                  title="Copy to Clipboard"
                  aria-label="Copy to Clipboard"
               >
                  <div
                     className={clsx(
                        "text-earie absolute -top-1 -translate-x-24 text-center text-sm font-semibold",
                        "rounded-md bg-[#f25f5c] px-2 py-1 dark:bg-[#a3b18a]",
                        [isCopied ? "visible" : "hidden"]
                     )}
                  >
                     Copied!
                  </div>
                  <ClipboardIcon
                     className={clsx("text-silversand_tints h-4 w-4")}
                  />
               </button>
            )}
            <pre
               className={clsx(
                  "overflow-x-auto font-mono text-lg font-semibold text-[#f3f3f3]"
               )}
               ref={codeRef}
            >
               {lang === "bash" && (
                  <span
                     className={clsx(
                        "relative top-[1.4px] select-none pr-2 text-center text-green-400",
                        "before:content-['$']"
                     )}
                  />
               )}

               {children}
            </pre>
         </div>

         {withFooter && (
            <CodeFooter lines={lines} selected={selected} language={lang} />
         )}
      </div>
   );
}

export default Code;
