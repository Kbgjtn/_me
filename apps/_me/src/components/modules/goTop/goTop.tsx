import clsx from 'clsx';
import { FC, useEffect, useState } from 'react';
interface GoTopProps {
   showGoTop: string;
   scrollUp: () => void;
}

const GoTop: FC<Partial<GoTopProps>> = ({ showGoTop, scrollUp }) => {
   const [showTopBtn, setShowTopBtn] = useState<boolean>();

   useEffect(() => {
      window.addEventListener('scroll', () => {
         if (window.scrollY > 300) {
            setShowTopBtn(true);
         } else {
            setShowTopBtn(false);
         }
      });
   }, [showTopBtn]);

   const goToTop = () => {
      if (showTopBtn) {
         window.scrollTo({
            top: 0,
            behavior: 'smooth',
         });
      } else {
         window.scrollTo({
            top:
               (document.body.scrollHeight ||
                  document.documentElement.scrollHeight) + 200,
            behavior: 'smooth',
         });
      }
   };

   return <></>;
};

export default GoTop;
