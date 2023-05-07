import { motion, useScroll } from "framer-motion";

const ScrollProgressY = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed z-50 top-0 left-0 right-0 h-[2px] bg-[#FFB300] opacity-40"
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
    ></motion.div>
  );
};

export default ScrollProgressY;
