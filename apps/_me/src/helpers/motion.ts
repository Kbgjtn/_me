export const list = {
   visible: {
      opacity: 1,
      transition: {
         when: 'beforeChildren',
         type: 'just',
         mass: 0.4,
         damping: 8,
         staggerChildren: 0.4,
      },
   },
   hidden: {
      opacity: 0,
      transition: {
         when: 'afterChildren',
      },
   },
};

export const item = {
   visible: { opacity: 1, x: 0 },
   hidden: { opacity: 0, x: -100 },
};

export const whileHover = {
   scaleY: 1.08,
   scaleX: 1.08,
   transition: { duration: 0.3 },
};

export const sliderVariants = {
   enter: (direction: number) => {
      return {
         x: direction > 0 ? 1000 : -1000,
         opacity: 0,
      };
   },
   center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
   },
   exit: (direction: number) => {
      return {
         zIndex: 0,
         x: direction < 0 ? 1000 : -1000,
         opacity: 0,
      };
   },
};
