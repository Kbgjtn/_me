import clsx from "clsx";
import Head from "next/head";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import MeThreeCanvas from "@/contents/3d/tree";
import GetInTouchPing from "@/components/ui/getInTouchPing";
import NavBar from "@/components/modules/navbar/navigation-bar";
import NavigateComponent from "@/components/ui/navigateComponent";

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
      <Head>
        <title>Daffa Requelme</title>
        <link
          rel="canonical"
          href="https://example.com/blog/original-post"
          key="canonical"
        />
      </Head>
      <NavBar />
      <motion.div
        className={clsx("w-full h-full flex-col bg-charcoal")}
        ref={ref}
      >
        <div
          className={clsx(
            "flex w-full max-h-auto h-screen self-center relative flex-col justify-center items-center"
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
          <NavigateComponent id={"#blogpost"} text={"↓"} behavior={"smooth"} />

          {isHoverMe ? (
            <motion.div
              className={clsx(
                "flex absolute items-center justify-center top-[80px]"
              )}
            >
              <motion.div
                variants={transitionCardInfo}
                className={clsx(
                  "flex m-auto self-center bg-charcoal rounded-[1.5rem] w-56 h-auto justify-center items-center sm:w-80 md:w-96 lg:w-[22rem] xl:w-[26rem] 2xl:w-[30rem]"
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
                  initial="hidden"
                  animate="visible"
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
        </div>
      </motion.div>
    </>
  );
};

export default Me;

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

const transitionCardInfo = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 40,
    },
  },
  exit: { y: 50, opacity: 0 },
};

const transitionShodowCardInfo = {
  hidden: { y: 0, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 260,
      damping: 40,
    },
  },
  exit: { x: 10, opacity: 0 },
};
