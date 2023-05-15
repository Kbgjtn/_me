import { motion, useInView } from 'framer-motion';

import { FC, useRef } from 'react';

interface Props {
   title: string;
   projects: any[];
}

const Masonry: FC<Props> = ({ title, projects }) => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });

   return (
      <>
         <motion.div
            className="bg-charcoal relative my-24 mt-[12rem] flex flex-col items-center justify-center gap-10 self-center transition-all"
            id="project-list"
         >
            <h1
               className="translate-y-12 text-center text-5xl font-semibold sm:p-5 sm:text-6xl md:p-6 md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-8xl"
               style={{
                  transform: isInView ? 'none' : 'translateX(-200px)',
                  opacity: isInView ? 1 : 0,
                  transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
               }}
            >
               {title}
            </h1>
            {isInView ? (
               <motion.p
                  className="px-8 py-2 text-center text-xs sm:text-sm md:text-xl lg:text-xl xl:text-xl 2xl:text-xl"
                  variants={sentence}
                  initial={'hidden'}
                  animate="visible"
               >
                  {`These are all my projects I have done!`
                     .split('')
                     .map((char, index) => {
                        return (
                           <motion.span
                              className=""
                              key={char + '-' + index}
                              variants={letter}
                           >
                              {char}
                           </motion.span>
                        );
                     })}
               </motion.p>
            ) : null}
         </motion.div>

         <motion.div
            className="bg-charcoal max-w-full columns-2 p-4 md:columns-3 lg:columns-3 lg:px-8 xl:columns-3 xl:px-10 2xl:columns-3 2xl:px-[12rem]"
            variants={list}
            animate={`${isInView ? 'visible' : 'hidden'}`}
            ref={ref}
            initial="hidden"
         >
            {projects.map(([name, link, _photo, _bgColor, height], index) => {
               return (
                  <motion.div
                     className={`relative mb-4 max-w-full rounded-xl border-4 border-[#1a1a1a] text-center font-medium transition-shadow`}
                     variants={itemChild}
                     key={`${name}-${index}`}
                     style={{
                        height: `${height}px`,
                        // background: `linear-gradient(${height}deg, #030303, #110309)`,
                        background: '#1e1e1e',
                     }}
                  >
                     <a
                        draggable={false}
                        href={`${link}`}
                        target="_blank"
                        referrerPolicy={'no-referrer'}
                     >
                        {name}
                     </a>
                  </motion.div>
               );
            })}
         </motion.div>
      </>
   );
};

const list = {
   visible: {
      opacity: 1,
      transition: {
         when: 'beforeChildren',
         type: 'just',
         mass: 0.4,
         damping: 8,
         staggerChildren: 0.4,
      },
   },
   hidden: {
      opacity: 0,
      transition: {
         when: 'afterChildren',
      },
   },
};

const itemChild = {
   visible: { opacity: 1, x: 0 },
   hidden: { opacity: 0, x: -100 },
};

const sentence = {
   hidden: { opacity: 1 },
   visible: {
      opacity: 1,
      transition: {
         delay: 0.1,
         staggerChildren: 0.05,
      },
   },
};

const letter = {
   hidden: {
      opacity: 0,
      y: 50,
   },
   visible: {
      opacity: 1,
      y: 0,
   },
};

export const container = {
   hidden: { opacity: 0, scale: 0 },
   visible: {
      opacity: 1,
      scale: 1,
      transition: {
         delayChildren: 0.3,
         staggerChildren: 0.2,
      },
   },
};

export const item = {
   hidden: { y: 20, opacity: 0 },
   visible: {
      y: 0,
      boxShadow: `0px 5px 12px #0d0d0d`,
      opacity: 1,
   },
};

export default Masonry;
