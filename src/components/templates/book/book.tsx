import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import BookSlider from "./book-slider";

const Book = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<div
			ref={ref}
			id="reading-list"
			className="flex flex-col h-full w-full items-center justify-center backdrop-blur">
			<div className="flex justify-self-center  self-center w-full h-full m-auto items-center justify-center flex-col">
				<div className="flex relative flex-col gap-16 self-center mt-[12rem] justify-center items-center ">
					<h3
						className="tp-trigger text-4xl font-semibold text-center translate-y-12 sm:text-6xl sm:p-5 md:text-7xl md:p-6 lg:text-8xl xl:text-8xl 2xl:text-8xl"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition:
								"all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
						}}>
						Reading List
					</h3>
					{isInView ? (
						<motion.p
							className="text-center text-xs py-2 px-8 sm:text-sm md:text-xl lg:text-xl xl:text-xl 2xl:text-xl"
							variants={sentence}
							initial="hidden"
							animate="visible">
							{`Sharing my book list, hoping to inspire all of u
							guys with fresh reading recommendations.`
								.split("")
								.map((char, index) => {
									return (
										<motion.span
											className=""
											key={char + "-" + index}
											variants={letter}>
											{char}
										</motion.span>
									);
								})}
						</motion.p>
					) : null}
				</div>
				<BookSlider />
			</div>
		</div>
	);
};

export default Book;

const sentence = {
	hidden: { opacity: 1 },
	visible: {
		opacity: 1,
		transition: {
			delay: 0.1,
			staggerChildren: 0.05,
		},
	},
};

const letter = {
	hidden: {
		opacity: 0,
		y: 50,
	},
	visible: {
		opacity: 1,
		y: 0,
	},
};
{
	/* <Image
        className="inline-flex object-cover noselect z-0 min-w-full min-h-full flex-col overflow-hidden"
        src={projectsBackground}
        alt=""
        draggable={"false"}
        referrerPolicy={"strict-origin-when-cross-origin"}
        width={1920}
        height={1080}
        quality={100}
        onContextMenu={(e) => e.preventDefault()}
	    /> */
}
