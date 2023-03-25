import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgressY = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed z-50 top-0 left-0 right-0 h-[2px] bg-[#2a9d8f]"
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
    ></motion.div>
  );
};

export default ScrollProgressY;
