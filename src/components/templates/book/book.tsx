import { motion } from "framer-motion";
import Head from "next/head";
import BookSlider from "./book-slider";

const Book = () => {
	return (
		<>
			<Head>
				<title>Daffa Requelme - Book Reading</title>
				<link
					rel="canonical"
					href="https://example.com/blog/original-post"
					key="canonical"
				/>
			</Head>
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
						<motion.p
							className="text-center text-xs py-2 px-8 sm:text-sm md:text-xl lg:text-xl xl:text-xl 2xl:text-xl"
							style={{ backgroundColor: "#1c1c1c" }}
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
					</div>
					<BookSlider />
				</div>
			</div>
		</>
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
