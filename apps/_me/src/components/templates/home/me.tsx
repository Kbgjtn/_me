import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import MeThreeCanvas from '@/contents/3d/tree';
import GetInTouchPing from '@/components/ui/getInTouchPing';
import NavigateComponent from '@/components/ui/navigateComponent';

const Me = () => {
   const [isHoverMe, setIsHoverMe] = useState(false);
   const ref = useRef(null);
   const handleMouseEnterHoverMe = () => {
      setIsHoverMe(true);
   };

   const handleMouseLeaveHoverMe = () => {
      setIsHoverMe(false);
   };

   return (
      <>
         <motion.div
            ref={ref}
            initial="hidden"
            animate="visible"
            className={clsx('flex h-screen w-full flex-col')}
         >
            <motion.div
               className={clsx(
                  'relative flex h-full w-full flex-col items-center justify-center'
               )}
               onMouseEnter={(e) => {
                  e.preventDefault();
                  handleMouseEnterHoverMe();
               }}
               onMouseLeave={(e) => {
                  e.preventDefault();
                  handleMouseLeaveHoverMe();
               }}
            >
               <GetInTouchPing />

               <div
                  className={clsx(
                     'h-full max-h-full w-full self-center max-md:max-h-fit'
                  )}
               >
                  <MeThreeCanvas />
               </div>
               <NavigateComponent
                  id={'#blogpost'}
                  text={'↓'}
                  behavior={'smooth'}
               />

               <AnimatePresence>
                  {isHoverMe ? (
                     <motion.div className={clsx('absolute top-20')}>
                        <motion.div
                           initial="hidden"
                           animate="visible"
                           exit="exit"
                           variants={transitionCardInfo}
                           className={clsx(
                              'flex place-items-center',
                              'bg-silversand_shades-400 max-w-auto mx-auto h-auto max-w-md max-md:max-w-sm',
                              'border-silversand_shades-700 rounded-[1.3rem] border-4',
                              'shadow-silversand_shades-900 drop-shadow-silversand_shades-900 shadow-lg drop-shadow-md',
                              'dark:drop-shadow-chineseBlack dark:shadow-chineseBlack dark:shadow-lg dark:drop-shadow-md',
                              'dark:bg-charcoal dark:border-earie'
                           )}
                        >
                           <motion.span
                              className={clsx(
                                 'mx-6 my-6 text-center text-sm font-semibold max-sm:my-4'
                              )}
                              variants={sentence}
                           >
                              {"hii, i'm dapa, student at Binus University (Comp. Science), nice to meet you!"
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
                           </motion.span>
                        </motion.div>
                     </motion.div>
                  ) : null}
               </AnimatePresence>
            </motion.div>
         </motion.div>
      </>
   );
};

export default Me;

const sentence = {
   hidden: { opacity: 0 },
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

const transitionCardInfo = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transform: 'scale(1)',
      transition: {
         ease: 'easeOut',
         duration: 2,
         type: 'spring',
         stiffness: 100,
      },
   },
   exit: {
      opacity: 0,
      transform: 'scale(0.5)',
      transition: {
         duration: 1,
         ease: 'easeIn',
         type: 'spring',
         stiffness: 100,
      },
   },
};
