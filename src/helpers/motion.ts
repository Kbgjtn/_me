export const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      type: "just",
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

export const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};
