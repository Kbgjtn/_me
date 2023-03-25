import { FC } from "react";
import { motion } from "framer-motion";

interface Props {
  projects: any[];
}

const Masonry: FC<Props> = ({ projects }) => {
  return (
    <>
      <div
        className="flex py-20 justify-center items-center bg-charcoal transition-all"
        id="project-list"
      >
        <h3 className="text-4xl font-semibold text-center translate-y-12 sm:text-6xl sm:p-5 md:text-7xl md:p-6 lg:text-8xl xl:text-8xl 2xl:text-8xl">
          Project
        </h3>
      </div>

      <motion.div
        className="bg-charcoal px-4 min-h-screen max-w-full columns-2 md:columns-3 lg:columns-3 lg:px-8 xl:columns-3 xl:px-10 2xl:columns-3 2xl:px-[12rem]"
        variants={container}
        animate="visible"
        initial="hidden"
      >
        {projects.map(([name, link, _photo, _bgColor, height], index) => {
          return (
            <motion.div
              className={`mb-4 max-w-full rounded-xl text-center font-medium p-6 transition-all border-4 border-[#070400]`}
              variants={item}
              key={`${name}-${index}`}
              style={{
                height: `${height}px`,
                background: `linear-gradient(${height}deg, #fff333, #110309)`,
                boxShadow: `0px 8px 16px #0d0d0d`,
              }}
            >
              <a className="" href={`${link}`} target="_blank">
                {name}
              </a>
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
};

export const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default Masonry;
