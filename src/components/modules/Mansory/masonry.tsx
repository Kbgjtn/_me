import { useLayoutEffect } from "react";

const Masonry = () => {
  function getRandomValue() {
    return Math.floor(Math.random() * (600 - 200 + 1)) + 200;
  }

  return (
    <>
      <div
        className="flex py-20 justify-center items-center bg-charcoal transition-all"
        id="project-list"
      >
        <h3 className="text-4xl font-semibold text-center translate-y-12 sm:text-6xl sm:p-5 md:text-7xl md:p-6 lg:text-8xl xl:text-8xl 2xl:text-8xl">
          Project
        </h3>
      </div>

      <div className="bg-charcoal px-4 min-h-screen max-w-full columns-2 md:columns-3 lg:columns-3 lg:px-8 xl:columns-3 xl:px-10 2xl:columns-3 2xl:px-[12rem]">
        {[
          [
            "project-1",
            "https://github.com/Kbgjtn",
            "photo-src",
            `linear-gradient(${getRandomValue()}deg, #666158, #1c1c1c)`,
            getRandomValue(),
          ],
          [
            "project-2",
            "https://github.com/Kbgjtn",
            "photo-src1",
            `linear-gradient(${getRandomValue()}deg, #000000, #202b1b)`,
            getRandomValue(),
          ],
          [
            "project-3",
            "https://github.com/Kbgjtn",
            "photo-src2",
            `linear-gradient(${getRandomValue()}deg, #1e1e1e, #5c675e)`,
            getRandomValue(),
          ],
          [
            "project-4",
            "https://github.com/Kbgjtn",
            "photo-src3",
            `linear-gradient(${getRandomValue()}deg, #141414, #1c1c0c)`,
            getRandomValue(),
          ],
          [
            "project-1",
            "https://github.com/Kbgjtn",
            "photo-src",
            `linear-gradient(${getRandomValue()}deg, #29291f, #0d0d08)`,
            getRandomValue(),
          ],
          [
            "project-2",
            "https://github.com/Kbgjtn",
            "photo-src1",
            `linear-gradient(${getRandomValue()}deg, #000001, #110309)`,
            getRandomValue(),
          ],
          [
            "project-3",
            "https://github.com/Kbgjtn",
            "photo-src2",
            `linear-gradient(${getRandomValue()}deg, #000000, #121317)`,
            getRandomValue(),
          ],

          [
            "project-8",
            "https://github.com/Kbgjtn",
            "photo-src4",
            `linear-gradient(${getRandomValue()}deg, #070c10, #010a1b)`,
            getRandomValue(),
          ],
          [
            "project-5",
            "https://github.com/Kbgjtn",
            "photo-src4",
            `linear-gradient(${getRandomValue()}deg, #070c10, #021f1b)`,
            getRandomValue(),
          ],
        ].map(([name, link, photo, bgColor, height], index) => {
          return (
            <div
              className={`mb-4 max-w-full rounded-md text-center font-medium p-6 transition-all border-4 border-[#070400]`}
              key={`${name}-${index}`}
              style={{
                height: `${height}px`,
                background: `linear-gradient(${getRandomValue()}deg, #000001, #110309)`,
                boxShadow: `0px 8px 16px #0d0d0d`,
              }}
            >
              <a className="" href={`${link}`} target="_blank">
                {name}
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Masonry;
