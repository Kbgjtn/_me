import { FC, useEffect, useState } from "react";
interface GoTopProps {
  showGoTop: string;
  scrollUp: () => void;
}

const GoTop: FC<Partial<GoTopProps>> = ({ showGoTop, scrollUp }) => {
  const [showTopBtn, setShowTopBtn] = useState<boolean>();

  useEffect(() => {
    window.addEventListener("scroll", () => {
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
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top:
          (document.body.scrollHeight ||
            document.documentElement.scrollHeight) + 200,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <svg
        className={
          showTopBtn
            ? /* ? `fixed -bottom-24 -right-[15.5rem] z-20 cursor-pointer` */
              `fixed top-[50%] translate-x[-50%] translate-y-[300%] opacity-70 left-[50%] z-20 cursor-pointer`
            : `fixed top-[50%] translate-x[-50%] translate-y-[280%] opacity-70 left-[50%] z-20 cursor-pointer`
        }
        onClick={goToTop}
      >
        <path
          stroke="#f3f3f3"
          fill="#f3f3f3"
          d={
            showTopBtn
              ? "M10 14.0004C10.3 14.0004 10.5 13.9004 10.7 13.7004L15 9.40039L15 25.0004C15 25.6004 15.4 26.0004 16 26.0004C16.6 26.0004 17 25.6004 17 25.0004V9.40039L21.3 13.7004C21.5 13.9004 21.8 14.0004 22 14.0004C22.2 14.0004 22.5 13.9004 22.7 13.7004C23.1 13.3004 23.1 12.7004 22.7 12.3004L16.7 6.30039C16.6 6.20039 16.5 6.10039 16.4 6.10039C16.2 6.00039 15.9 6.00039 15.6 6.10039C15.5 6.20039 15.4 6.20039 15.3 6.30039L9.3 12.3004C8.9 12.7004 8.9 13.3004 9.3 13.7004C9.5 13.9004 9.7 14.0004 10 14.0004Z"
              : "M13 11.9996C12.7 11.9996 12.5 12.0996 12.3 12.2996L8 16.5996L8 0.999608C8 0.399608 7.6 -0.000391566 7 -0.000391618C6.4 -0.000391671 6 0.399608 6 0.999608L6 16.5996L1.7 12.2996C1.5 12.0996 1.2 11.9996 1 11.9996C0.800001 11.9996 0.5 12.0996 0.3 12.2996C-0.1 12.6996 -0.1 13.2996 0.3 13.6996L6.3 19.6996C6.4 19.7996 6.5 19.8996 6.6 19.8996C6.8 19.9996 7.1 19.9996 7.4 19.8996C7.5 19.7996 7.6 19.7996 7.7 19.6996L13.7 13.6996C14.1 13.2996 14.1 12.6996 13.7 12.2996C13.5 12.0996 13.3 11.9996 13 11.9996Z"
          }
        ></path>
      </svg>
    </>
  );
};

export default GoTop;
