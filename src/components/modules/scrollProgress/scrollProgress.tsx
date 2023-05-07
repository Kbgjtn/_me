import { motion, useScroll } from "framer-motion";
import clsx from "clsx";

const ScrollProgressY = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={clsx(
        "fixed z-50 top-0 left-0 right-0 h-[2.5px] opacity-40",
        `${scrollYProgress ? "bg-[#f3f3f3]" : "bg-[#111111]"}`
      )}
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
    ></motion.div>
  );
};

export default ScrollProgressY;
