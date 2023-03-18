import Image from "next/image";
import projectsBackground from "../../../assets/images/projects-bg-me.png";
import BookSlider from "./book-slider";

const Book = () => {
	return (
		<div
			id="reading-list"
			className="w-full h-full flex justify-center items-center bg-charcoal">
			{/* <Image
        className="inline-flex object-cover noselect z-0 min-w-full min-h-full flex-col overflow-hidden"
        src={projectsBackground}
        alt=""
        draggable={"false"}
        referrerPolicy={"strict-origin-when-cross-origin"}
        width={1920}
        height={1080}
        quality={100}
        onContextMenu={(e) => e.preventDefault()}
      /> */}

			<div className="flex justify-self-center self-center absolute w-full h-full m-auto items-center justify-center flex-col">
				<div className="flex relative flex-col gap-16 self-center mt-[12rem] justify-center items-center ">
					<h3 className="tp-trigger text-4xl font-semibold text-center translate-y-12 sm:text-6xl sm:p-5 md:text-7xl md:p-6 lg:text-8xl xl:text-8xl 2xl:text-8xl">
						Reading List
					</h3>
					<p
						className="text-center text-xs py-2 px-8 sm:text-sm md:text-sm md:text-xl lg:text-xl xl:text-xl 2xl:text-xl"
						style={{ backgroundColor: "#1c1c1c" }}>
						Sharing my book list, hoping to inspire all of u guys
						with fresh reading recommendations.
					</p>
				</div>
				<BookSlider />
			</div>
		</div>
	);
};

export default Book;
