import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import BookSlider from "./bookSlider";
import clsx from "clsx";

const Book = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
   return (
      <>
         {/*heading title & description*/}
         <div className="mx-auto flex flex-col items-center justify-center pt-20">
            <h3 className={clsx("text-center text-8xl max-sm:text-6xl")}>
               Reading
            </h3>
            {isInView ? (
               <motion.p
                  className={clsx("max-w-lg text-center max-md:max-w-sm")}
                  variants={sentence}
                  initial="hidden"
                  animate="visible"
               >
                  {`Sharing my book list, hoping to inspire all of u
							guys with fresh reading recommendations.`
                     .split("")
                     .map((char, index) => {
                        return (
                           <motion.span
                              key={char + "-" + index}
                              variants={letter}
                           >
                              {char}
                           </motion.span>
                        );
                     })}
               </motion.p>
            ) : null}
         </div>
         <div
            ref={ref}
            id="reading-list"
            className="container relative  mt-24 flex h-full w-full flex-col items-start justify-center py-4"
         >
            <BookSlider />
         </div>
      </>
   );
};

export default Book;

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
{
   /* <Image
        className="inline-flex object-cover noselect z-0 min-w-full min-h-full flex-col overflow-hidden"
        src={projectsBackground}
        alt=""
        draggable={"false"}
        referrerPolicy={"strict-origin-when-cross-origin"}
        width={1920}
        height={1080}
        quality={100}
        onContextMenu={(e) => e.preventDefault()}
	    /> */
}
