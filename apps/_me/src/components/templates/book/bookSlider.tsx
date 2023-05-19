import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { seedBook } from './seedBook';
import clsx from 'clsx';
import { sliderVariants } from '@/helpers/motion';

function BookSlider() {
   const size = useWindowSize();
   const [bookDetailCard, setBookDetailCard] = useState<IBookDetailCard>({
      isHover: false,
      isDrag: false,
      index: -1,
   });

   const innerCard = useRef<HTMLDivElement | null>(null);

   return (
      <motion.div className="relative h-full w-screen overflow-hidden">
         <motion.div
            ref={innerCard}
            variants={sliderVariants}
            className="flex h-full w-screen items-center justify-start md:px-8 lg:px-8 xl:px-8 2xl:px-8"
            drag={'x'}
            dragConstraints={{
               right: 0,
               left: -(size?.width + 500),
            }}
            style={{
               animation: 'primary 3s linear infinite',
               filter:
                  'brightness(100%) contrast(100%) saturate(100%) grayscale(50%) sepia(0%) hue-rotate(0deg) blur(0px)',
            }}
         >
            {seedBook.map((book: any, i: number) => {
               return (
                  <motion.div
                     className="noselect relative flex h-auto min-w-max cursor-grab items-center justify-center p-2 sm:p-2"
                     whileTap={{
                        cursor: 'grabbing',
                     }}
                     whileHover={{
                        scaleY: 1.08,
                        scaleX: 1.08,
                        transition: { duration: 0.3 },
                     }}
                     key={i}
                     onContextMenu={(e) => {
                        e.preventDefault();
                     }}
                     onMouseEnter={(e) => {
                        e.preventDefault();
                        setBookDetailCard({
                           isHover: true,
                           isDrag: false,
                           index: i,
                        });
                     }}
                     onMouseLeave={(e: any) => {
                        e.preventDefault();
                        setBookDetailCard({
                           isHover: false,
                           isDrag: false,
                           index: i,
                        });
                     }}
                  >
                     <Image
                        className={clsx(
                           'noselect pointer-events-none h-[16rem] w-[12rem] self-center object-fill object-center',
                           'sm:h-[16rem] sm:w-[12rem] md:h-[20rem] md:w-[14rem] lg:h-[22rem] lg:w-[16rem] xl:h-[24rem] xl:w-[18rem] 2xl:h-[26rem] 2xl:w-[20rem]',
                           'bg-[#8B8B8B] duration-500',
                           'rounded-3xl border-4 border-[#484848]',
                           'dark:border-[#292929]',
                           'dark:bg-charcoal dark:border-[#292929]'
                        )}
                        onContextMenu={(e: any) => {
                           e.preventDefault();
                        }}
                        style={{
                           filter:
                              bookDetailCard?.isHover &&
                              bookDetailCard?.index === i
                                 ? 'brightness(25%) contrast(100%) saturate(50%) grayscale(100%) sepia(50%) hue-rotate(0deg) blur(1.4px)'
                                 : 'brightness(100%) contrast(100%) saturate(100%) grayscale(0%) sepia(50%) hue-rotate(0deg) blur(0px)',
                        }}
                        src={book.links.image}
                        alt={book.title}
                        width={1200}
                        height={1200}
                        referrerPolicy="no-referrer"
                        quality="100"
                     />
                     <div className="absolute m-12 h-auto w-auto overflow-hidden">
                        <p
                           className={clsx(
                              'text-mn sm:text-mn overflow-hidden text-ellipsis text-center font-medium md:text-sm lg:text-sm xl:text-sm 2xl:text-sm',
                              'text-[#f3f3f3] dark:text-[#b2b2b2]',
                              `opacity-${
                                 bookDetailCard?.isHover &&
                                 bookDetailCard?.index === i
                                    ? 100
                                    : 0
                              }`
                           )}
                        >
                           {book?.title ?? ''}
                        </p>
                     </div>
                  </motion.div>
               );
            })}
         </motion.div>
      </motion.div>
   );
}

interface WindowSizeState {
   width: number;
   height: number;
}

// Hook
function useWindowSize() {
   // Initialize state with undefined width/height so server and client renders match
   // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
   const [windowSize, setWindowSize] = useState<WindowSizeState>({
      width: 0,
      height: 0,
   });

   useEffect(() => {
      function handleResize() {
         setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
         });
      }

      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
   }, []);

   return windowSize;
}

interface IBookSliderArgs {
   currentPage: number;
   setPage: number;
   direction: number;
}

interface IBookDetailCard {
   isHover: boolean;
   isDrag: boolean;
   index: number;
}

export default BookSlider;
