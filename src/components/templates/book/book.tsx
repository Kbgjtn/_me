import Image from "next/image";
import projectsBackground from "../../../assets/images/projects-bg-me.png";
import BookSlider from "./book-slider";

const Book = () => {
	return (
		<div className="w-full h-full flex justify-center items-center bg-black">
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

			<div className="flex justify-self-center self-center absolute w-full h-full m-auto items-center justify-center flex-col">
				<div className="inline-flex self-center justify-center items-center">
					<h3 className="text-5xl font-bold text-center sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-8xl">
						Reading List
					</h3>
				</div>
				<BookSlider />
			</div>
		</div>
	);
};

export default Book;
