import GetInTouchPing from "@/components/ui/getInTouchPing";
import NavigateComponent from "@/components/ui/navigateComponent";
import MeThreeCanvas from "@/contents/3d/tree";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

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
        animate="visible"
        initial="hidden"
        ref={ref}
        className={clsx(
          "flex flex-col h-screen w-full items-center justify-start"
        )}
      >
        <GetInTouchPing />
        <div
          className="inline-flex justify-center self-start items-center max-h-full h-full w-full"
          onMouseEnter={(e) => {
            e.preventDefault();
            handleMouseEnterHoverMe();
          }}
          onMouseLeave={(e) => {
            e.preventDefault();
            handleMouseLeaveHoverMe();
          }}
        >
          <MeThreeCanvas />
        </div>
        <NavigateComponent id={"reading-list"} text={"↓"} behavior={"smooth"} />

        <AnimatePresence>
          {isHoverMe ? (
            <motion.div
              className={clsx(
                "fixed items-center justify-center top-[80px] translate-y-24"
              )}
            >
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={transitionCardInfo}
                className={clsx(
                  "flex relative m-auto self-center bg-charcoal rounded-[1.5rem] w-56 h-auto justify-center items-center sm:w-80 md:w-96 lg:w-[22rem] xl:w-[26rem] 2xl:w-[30rem]"
                )}
                style={{
                  boxShadow: `0px 8px 18px #000000`,
                  border: "4px solid #1c1c1c",
                }}
              >
                <motion.p
                  className={clsx(
                    "font-semibold p-4 relative text-center text-mn sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm"
                  )}
                  variants={sentence}
                >
                  {"hii, i'm dapa, student at Binus University (Comp. Science), nice to meet you!"
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
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
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
    transform: "scale(1)",
    transition: {
      ease: "easeOut",
      duration: 2,
      type: "spring",
      stiffness: 100,
    },
  },
  exit: {
    opacity: 0,
    transform: "scale(0.5)",
    transition: {
      duration: 1,
      ease: "easeIn",
      type: "spring",
      stiffness: 100,
    },
  },
};
