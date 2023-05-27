import {
   KBarAnimator,
   KBarProvider,
   KBarPortal,
   KBarPositioner,
   KBarSearch,
   KBarResults,
   useMatches,
   ActionImpl,
   ActionId,
} from "kbar";
import { useTheme } from "next-themes";
import React from "react";
import { PropsWithChildren } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import {
   BrightIcon,
   KeyboardIcon,
   MeIcon,
   MoonIcon,
   PostsIcon,
   ThemesIcon,
} from "@/components/icons";
import { FileIcon } from "@/components/iconsFile";

function CommandBar(props: PropsWithChildren) {
   const router = useRouter();
   const { theme, setTheme } = useTheme();
   const isDark = theme === "dark";

   const actions = [
      {
         id: "blog",
         name: "All my posts",
         shortcut: ["b"],
         keywords: "writing words",
         section: "Blog",
         perform: () => router.push("/posts"),
         icon: (
            <PostsIcon
               props={{
                  className: clsx("h-5 w-5"),
               }}
            />
         ),
      },
      {
         id: "home",
         name: "Go to home",
         shortcut: ["g", "h"],
         keywords: "go-home",
         section: "Home",
         perform: () => router.push("/"),
         icon: <MeIcon props={{ className: "h-6 w-6" }} />,
      },
      {
         id: "uses",
         name: "Uses stack",
         shortcut: ["g", "h"],
         keywords: "go-uses",
         section: "Uses",
         perform: () => router.push("/posts/meuses/"),
         icon: <FileIcon className={"stroke-earie h-6 w-6 fill-[#EAF205]"} />,
      },
      {
         id: "theme",
         name: "Setup theme mode",
         shortcut: ["t"],
         keywords: "set theme mode",
         section: "theme",
         icon: (
            <ThemesIcon
               props={{
                  className: "h-6 w-6 dark:fill-red1",
               }}
            />
         ),
      },
      {
         id: "darkTheme",
         name: "Dark",
         keywords: "dark theme",
         shortcut: ["u", "d"],
         section: "Preferences",
         perform: () => {
            setTheme("dark");
         },
         icon: (
            <MoonIcon
               props={{
                  className: "h-6 w-6 fill-silversand_shades-400 ",
               }}
            />
         ),
         parent: "theme",
      },
      {
         id: "lightTheme",
         name: "Light",
         keywords: "light theme",
         shortcut: ["u", "l"],
         section: "Preferences",
         perform: () => {
            setTheme("light");
         },
         icon: <BrightIcon props={{ className: "h-6 w-6" }} />,
         parent: "theme",
      },
   ];

   return (
      <KBarProvider actions={actions}>
         <KBarPortal>
            <KBarPositioner>
               <div
                  className={
                     "bg-earie fixed top-0 z-[-1] block h-full w-full opacity-90"
                  }
               />

               <TipCommand />
               <KBarAnimator
                  className={clsx(
                     " my-12 h-full max-h-full min-h-[400px] overflow-hidden backdrop-blur max-md:w-full",
                     "dark:bg-transparent",
                     "border-silversand_shades-800 rounded-xl border-2",
                     "dark:border-earie"
                  )}
               >
                  <KBarSearch
                     placeholder={"search somethin here"}
                     aria-placeholder={"search somethin here..."}
                     title={"search somethin here"}
                     className={clsx(
                        "items-center justify-center place-self-center self-center text-white focus:text-white active:text-white dark:text-white",
                        "placeholder:text-silversand_tints-500",
                        "dark:placeholder:text-silversand_tints-400",
                        "dark:bg-charcoal",
                        "font-semibold"
                     )}
                     style={{
                        all: "unset",
                        color: "white",
                        background: clsx([isDark ? "#111" : "none"]),
                        border: clsx([
                           isDark ? "2px solid #272727" : "2px solid #212121",
                        ]),
                        fontWeight: "700",
                        width: "36vw",
                        padding: "12px 24px",
                        textAlign: "left",
                        margin: "20px 25px 40px 25px",
                        borderRadius: "8px",
                     }}
                  />
                  <RenderResults />
               </KBarAnimator>
            </KBarPositioner>
         </KBarPortal>
         {props.children}
      </KBarProvider>
   );
}

function TipCommand() {
   return (
      <>
         <div className="text-silversand_tints-400 absolute bottom-0 left-0 mb-20 place-self-end max-md:hidden">
            {/* ICON & TITLE  */}
            <div
               className={clsx(
                  "mx-12 flex max-w-md items-center justify-start gap-4"
               )}
            >
               <span className={clsx("")}>
                  <KeyboardIcon
                     props={{
                        className: clsx(
                           "max-md:w-14 max-md:h-14 h-16 w-16 fill-silversand_shades-300"
                        ),
                     }}
                  />
               </span>
               <h3 className={clsx("text-3xl font-semibold max-md:text-2xl")}>
                  HINT: Shortcuts
               </h3>
            </div>
            <div
               className={clsx(
                  "mx-12 flex max-w-md items-center justify-center gap-4 "
               )}
            >
               <p className={clsx("relative font-semibold")}>
                  Effortlessly navigate the site by utilizing keyboard
                  shortcuts.
               </p>
            </div>
            <div
               className={clsx(
                  "mx-12 mt-4 flex max-w-md flex-col items-center "
               )}
            >
               <div
                  className={clsx(
                     "mx-12 flex w-full items-center justify-between gap-8 border-b px-4 py-2"
                  )}
               >
                  <span className={clsx("text-lg font-semibold")}>
                     Quick Access Open
                  </span>
                  <span
                     className={clsx(
                        "border-silversand_shades-500 rounded-md border-2 px-1.5"
                     )}
                  >
                     ctrl + k
                  </span>
               </div>

               <div
                  className={clsx(
                     "mx-12 flex w-full items-center justify-between gap-8 border-b px-4 py-2"
                  )}
               >
                  <span className={clsx("text-lg font-semibold")}>
                     Quick Access Close
                  </span>
                  <span
                     className={clsx(
                        "border-silversand_shades-500 rounded-md border-2 px-1.5"
                     )}
                  >
                     Esc
                  </span>
               </div>
               <div
                  className={clsx(
                     "mx-12 flex w-full items-center justify-between gap-8 border-b px-4 py-2"
                  )}
               >
                  <span className={clsx("text-lg font-semibold")}>
                     Arrow Key Search
                  </span>
                  <span
                     className={clsx(
                        "border-silversand_shades-500 rounded-md border-2 px-1.5"
                     )}
                  >
                     ← ↑ →
                  </span>
               </div>
            </div>
         </div>
      </>
   );
}

function RenderResults() {
   const { results, rootActionId } = useMatches();

   return (
      <KBarResults
         items={results}
         onRender={({ item, active }) =>
            typeof item === "string" ? (
               <div
                  className={clsx(
                     "grid-auto-cols text-bold grid w-full content-center items-center gap-12 px-12 text-white"
                  )}
               >
                  {item}
               </div>
            ) : (
               <div
                  className={clsx(
                     "flex w-full scroll-m-0 overflow-hidden scroll-smooth text-xl"
                  )}
               >
                  <ResultItem
                     action={item}
                     active={active}
                     currentRootActionId={rootActionId}
                  />
               </div>
            )
         }
      />
   );
}
const ResultItem = React.forwardRef(
   (
      {
         action,
         active,
         currentRootActionId,
      }: {
         action: ActionImpl;
         active: boolean;
         currentRootActionId: ActionId;
      },
      ref: React.Ref<HTMLDivElement>
   ) => {
      const ancestors = React.useMemo(() => {
         if (!currentRootActionId) return action.ancestors;
         const index = action.ancestors.findIndex(
            (ancestor) => ancestor.id === currentRootActionId
         );
         // +1 removes the currentRootAction; e.g.
         // if we are on the "Set theme" parent action,
         // the UI should not display "Set theme… > Dark"
         // but rather just "Dark"
         return action.ancestors.slice(index + 1);
      }, [action.ancestors, currentRootActionId]);

      return (
         <div
            ref={ref}
            className={clsx(
               "bg-charcoal flex w-full rounded-lg px-12 py-4 text-white active:bg-white",
               [
                  active
                     ? "bg-silversand_shades-800 dark:bg-earie"
                     : "bg-transparent",
               ]
            )}
            style={{
               display: "flex",
               alignItems: "center",
               justifyContent: "space-between",
               width: "100%",
               margin: "12px 25px",
               cursor: "pointer",
            }}
         >
            <div
               style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  fontSize: 14,
                  width: "100%",
               }}
            >
               {action.icon && action.icon}
               <div
                  style={{
                     display: "flex",
                     flexDirection: "column",
                  }}
               >
                  <div className={clsx()}>
                     {ancestors.length > 0 &&
                        ancestors.map((ancestor) => (
                           <React.Fragment key={ancestor.id}>
                              <span
                                 className={clsx()}
                                 style={{
                                    opacity: 0.5,
                                    marginRight: 8,
                                 }}
                              >
                                 {ancestor.name}
                              </span>
                              <span
                                 className={clsx("")}
                                 style={{
                                    marginRight: 8,
                                    color: "red",
                                 }}
                              >
                                 &rsaquo;
                              </span>
                           </React.Fragment>
                        ))}
                     <span className={clsx()}>{action.name}</span>
                  </div>
                  {action.subtitle && (
                     <span className={clsx()} style={{ fontSize: 12 }}>
                        {action.subtitle}
                     </span>
                  )}
               </div>
            </div>
            {action.shortcut?.length ? (
               <div
                  aria-hidden
                  className={clsx()}
                  style={{
                     display: "grid",
                     gridAutoFlow: "column",
                     gap: "4px",
                  }}
               >
                  {action.shortcut.map((sc) => (
                     <kbd
                        className={clsx(
                           "bg-silversand_shades-600 dark:bg-silversand_shades-800"
                        )}
                        key={sc}
                        style={{
                           padding: "4px 6px",
                           borderRadius: "4px",
                           fontSize: 14,
                        }}
                     >
                        {sc}
                     </kbd>
                  ))}
               </div>
            ) : null}
         </div>
      );
   }
);

export default CommandBar;
