import { motion, useInView } from "framer-motion";
import { FC, useRef } from "react";

interface Props {
  title: string;
  projects: any[];
}

const Masonry: FC<Props> = ({ title, projects }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div
        className="flex relative flex-col gap-10 my-24 self-center mt-[12rem] justify-center items-center transition-all"
        id="project-list"
      >
        <h3
          className="text-4xl font-semibold text-center translate-y-12 sm:text-6xl sm:p-5 md:text-7xl md:p-6 lg:text-8xl xl:text-8xl 2xl:text-8xl"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
        >
          {title}
        </h3>
        {isInView ? (
          <motion.p
            className="text-center text-xs py-2 px-8 sm:text-sm md:text-xl lg:text-xl xl:text-xl 2xl:text-xl"
            style={{
              backgroundColor: "#1c1c1c",
            }}
            variants={sentence}
            initial={"hidden"}
            animate="visible"
          >
            {`These are all my projects I have done!`
              .split("")
              .map((char, index) => {
                return (
                  <motion.span
                    className=""
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

      <motion.div
        className="p-4 bg-charcoal max-w-full columns-2 md:columns-3 lg:columns-3 lg:px-8 xl:columns-3 xl:px-10 2xl:columns-3 2xl:px-[12rem]"
        variants={container}
        animate="visible"
        ref={ref}
        initial="hidden"
      >
        {projects.map(([name, link, _photo, _bgColor, height], index) => {
          return (
            <motion.div
              className={`relative mb-4 max-w-full rounded-xl text-center font-medium transition-shadow border-4 border-[#070400]`}
              variants={item}
              key={`${name}-${index}`}
              style={{
                height: `${height}px`,
                background: `linear-gradient(${height}deg, #030303, #110309)`,
                boxShadow: `0px 2px 6px #0d0d0d`,
              }}
            >
              <a
                draggable={false}
                href={`${link}`}
                target="_blank"
                referrerPolicy={"no-referrer"}
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
