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
            className={clsx('h-full w-full flex-col')}
         >
            <motion.div
               className={clsx(
                  'max-h-auto relative flex h-screen w-full flex-col items-center justify-center self-center'
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
               <MeThreeCanvas />
               <NavigateComponent
                  id={'#blogpost'}
                  text={'↓'}
                  behavior={'smooth'}
               />

               <AnimatePresence>
                  {isHoverMe ? (
                     <motion.div
                        className={clsx(
                           'absolute top-[80px] flex items-center justify-center'
                        )}
                     >
                        <motion.div
                           initial="hidden"
                           animate="visible"
                           exit="exit"
                           variants={transitionCardInfo}
                           className={clsx(
                              'm-auto flex h-auto w-56 items-center justify-center self-center rounded-[1.5rem] border-4 border-[#484848] bg-[#8B8B8B] sm:w-80 md:w-96 lg:w-[22rem] xl:w-[26rem] 2xl:w-[30rem]',
                              'dark:bg-charcoal dark:border-[#292929]'
                           )}
                           style={{
                              boxShadow: `0px 8px 18px #000000`,
                           }}
                        >
                           <motion.p
                              className={clsx(
                                 'text-mn relative p-4 text-center font-semibold sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm'
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
                           </motion.p>
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
