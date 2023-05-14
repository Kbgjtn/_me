import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import bookImages from "../../../assets/images/books";
import { seedBook } from "./seedBook";
import clsx from "clsx";
import { sliderVariants } from "@/helpers/motion";

const BookSlider = () => {
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
        className="flex items-center justify-start w-screen h-full cursor-grab md:px-8 lg:px-8 xl:px-8 2xl:px-8"
        drag={"x"}
        dragConstraints={{
          right: 0,
          left: -(size?.width + 1100),
        }}
        style={{
          animation: "primary 3s linear infinite",
          filter:
            "brightness(100%) contrast(100%) saturate(100%) grayscale(50%) sepia(0%) hue-rotate(0deg) blur(0px)",
        }}
      >
        {bookImages.map((img: any, i: number) => {
          return (
            <motion.div
              className="inline-flex relative min-w-max items-center justify-center h-auto p-2 sm:p-2 noselect"
              whileTap={{
                cursor: "grabbing",
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
                  "self-center noselect pointer-events-none object-fill w-[10rem] h-[15rem] sm:w-[12rem] sm:h-[16rem] md:w-[14rem] md:h-[20rem] lg:w-[16rem] lg:h-[22rem] xl:w-[18rem] xl:h-[24rem] 2xl:w-[20rem] 2xl:h-[26rem]",
                  "duration-500 bg-[#1c1c1c]",
                  "rounded-3xl border-4 border-[#484848]",
                  "dark:border-[#292929]"
                )}
                onContextMenu={(e: any) => {
                  e.preventDefault();
                }}
                style={{
                  filter:
                    bookDetailCard?.isHover && bookDetailCard?.index === i
                      ? "brightness(25%) contrast(100%) saturate(50%) grayscale(100%) sepia(50%) hue-rotate(0deg) blur(1.4px)"
                      : "brightness(100%) contrast(100%) saturate(100%) grayscale(0%) sepia(50%) hue-rotate(0deg) blur(0px)",
                }}
                src={img}
                placeholder="blur"
                alt="book"
              />
              <div className="inline-flex absolute z-20 m-12 font-bold text-lg overflow-hidden w-auto h-auto">
                <p
                  className={clsx(
                    "text-center font-medium text-mn overflow-hidden text-ellipsis sm:text-mn md:text-sm lg:text-sm xl:text-sm 2xl:text-sm",
                    "dark:text-[#b2b2b2] text-[#b2b2b2]",
                    `opacity-${
                      bookDetailCard?.isHover && bookDetailCard?.index === i
                        ? 100
                        : 0
                    }`
                  )}
                >
                  {seedBook[i]?.title ?? ""}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

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

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
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
