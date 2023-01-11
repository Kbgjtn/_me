import Image from "next/image";
import projectsBackground from "../../../assets/images/projects-bg-me.png";

const Book = () => {
  return (
    <div className="w-full h-full flex bg-black">
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

      <div className="inline-flex absolute w-full h-full m-0-auto items-center justify-evenly flex-col my-4">
        <div className="inline-flex self-center justify-center items-center">
          <h3 className="text-8xl font-bold text-center">Reading List</h3>
        </div>
        <div className="flex flex-col justify-evenly items-center h-full w-full gap-4 text-center">
          <div className="inline-flex justify-center items-center w-auto h-24 flex-col px-12">
            <h4 className="text-2xl font-semibold">
              How to Win Friends & Influence People
            </h4>
            <span className="text-2xl font-medium text-xl">
              by Dale Carnegie
            </span>
          </div>
          <div className="inline-flex justify-center items-center w-auto h-24 flex-col px-12">
            <h4 className="text-2xl font-semibold">
              The Things You Can See Only When You Slow Down
            </h4>
            <span className="text-2xl font-medium">by Haemin Sunim</span>
          </div>
          <div className="inline-flex justify-center items-center w-auto h-24 flex-col px-12">
            <h4 className="text-2xl font-semibold">
              Funiculi Funicula - Before the Coffee Gets Cold
            </h4>
            <span className="text-2xl font-medium">by Toshikazu Kawaguchi</span>
          </div>
          <div className="inline-flex justify-center items-center w-auto h-24 flex-col px-12">
            <h4 className="text-2xl font-semibold">
              The Courage to Be Disliked: How to Free Yourself, Change your Life
              and Achieve Real Happiness
            </h4>
            <span className="text-2xl font-medium">
              by Ichiro Kishimi, Fumitake Koga
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
