import { FC, useEffect, useState } from "react";
interface GoTopProps {
  showGoTop: string;
  scrollUp: () => void;
}

const GoTop: FC<Partial<GoTopProps>> = ({ showGoTop, scrollUp }) => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showTopBtn ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="top"
          className="fixed -bottom-16 -right-[16rem] z-20 cursor-pointer"
          onClick={goToTop}
        >
          <path
            stroke="#f3f3f3"
            fill="#f3f3f3"
            d="M10 14c.3 0 .5-.1.7-.3L15 9.4V25c0 .6.4 1 1 1s1-.4 1-1V9.4l4.3 4.3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-6-6c-.1-.1-.2-.2-.3-.2-.2-.1-.5-.1-.8 0-.1.1-.2.1-.3.2l-6 6c-.4.4-.4 1 0 1.4.2.2.4.3.7.3z"
          ></path>
        </svg>
      ) : null}
    </>
  );
};

export default GoTop;
