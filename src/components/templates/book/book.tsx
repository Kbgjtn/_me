import Image from "next/image";
import projectsBackground from "../../../assets/images/projects-bg-me.png";
import BookSlider from "./book-slider";

const Book = () => {
  return (
    <div
      id="reading-list"
      className="w-full h-full flex justify-center items-center bg-black"
    >
      <Image
        className="inline-flex object-cover noselect z-0 min-w-full min-h-full flex-col overflow-hidden"
        src={projectsBackground}
        alt=""
        draggable={"false"}
        referrerPolicy={"strict-origin-when-cross-origin"}
        width={1920}
        height={1080}
        quality={100}
        onContextMenu={(e) => e.preventDefault()}
      />

      <div
        className="flex justify-self-center self-center absolute w-full h-full m-auto items-center justify-center flex-col"
        aria-describedby="tp-container"
      >
        <div className="inline-flex relative self-center justify-center items-center">
          <h3 className="tp-trigger text-6xl font-semibold text-center sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl 2xl:text-10xl">
            Reading List
          </h3>
          <div
            id="tp-container"
            className="font-cascode font-medium text-xs"
            role="tooltip"
          >
            Here is a list of all the books that I have read, and hopefully it
            can add new references for all my friends
          </div>
        </div>
        <BookSlider />
      </div>
    </div>
  );
};

export default Book;
