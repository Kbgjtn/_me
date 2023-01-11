import { motion, useScroll, useSpring } from "framer-motion";
import { wrap } from "module";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import bookImages from "../../../assets/images/books";

const xOffset = 100;

const sliderVariants = {
	enter: (direction: number) => ({
		x: direction > 0 ? xOffset : -xOffset,
		opacity: 0,
	}),
	active: {
		x: 0,
		opacity: 1,
		transition: { delay: 0.2 },
	},
	exit: (direction: number) => ({
		x: direction > 0 ? -xOffset : xOffset,
		opacity: 0,
	}),
};

const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
};

interface IBookSliderArgs {
	currentPage: number;
	setPage: number;
	direction: number;
}

interface IBookDetailCard {
	isHover: boolean;
	isDrag: boolean;
	index: number;
}

const seedBook = [
	{
		title: "How to Win Friends & Influence People",
		author: "Dale Carnegie",
		links: {
			audio: "",
			book: "",
		},
	},
	{
		title: "The Things You Can See Only When You Slow Down",
		author: "Haemin Sunim",
		links: {
			audio: "",
			book: "",
		},
	},
	{
		title: "Funiculi Funicula",
		author: "Toshikazu Kawaguchi",
		links: {
			audio: "",
			book: "",
		},
	},
	{
		title: "The Psychology of Money",
		author: "Morgan Housel",
		links: {
			audio: "",
			book: "https://www.amazon.com/Psychology-Money-Timeless-Lessons-Happiness/dp/B08D9WJ9G8",
		},
	},
	{
		title: "The Courage to Be Disliked: How to Free Yourself, Change your Life and Achieve Real Happiness",
		author: "Ichiro Kishimi, Fumitake Koga",
		links: {
			audio: "",
			book: "",
		},
	},
	{
		title: "Ikigai",
		author: "Héctor García",
		links: {
			audio: "",
			book: "https://www.amazon.com/Ikigai-audiobook/dp/B074WCX5X4/ref=sr_1_1?keywords=ikigai&qid=1673455593&s=audible&sprefix=ikiga%2Caudible%2C332&sr=1-1",
		},
	},
	{
		title: "Filosofi Teras",
		author: "Henry Manampiring",
		links: {
			audio: "",
			book: "https://www.amazon.com/Ikigai-audiobook/dp/B074WCX5X4/ref=sr_1_1?keywords=ikigai&qid=1673455593&s=audible&sprefix=ikiga%2Caudible%2C332&sr=1-1",
		},
	},
	{
		title: "Rich Dad Poor Dad",
		author: "Robert T. Kiyosaki",
		links: {
			audio: "",
			book: "https://www.amazon.com/Ikigai-audiobook/dp/B074WCX5X4/ref=sr_1_1?keywords=ikigai&qid=1673455593&s=audible&sprefix=ikiga%2Caudible%2C332&sr=1-1",
		},
	},
];

const BookSlider = () => {
	const [width, setWidth] = useState(0);
	const [bookDetailCard, setBookDetailCard] = useState<IBookDetailCard>({
		isHover: false,
		isDrag: false,
		index: -1,
	});

	const innerCard = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		console.log(bookDetailCard);
	}, [bookDetailCard]);
	useEffect(() => {
		if (!innerCard.current) return;
		const { scrollWidth, offsetWidth } = innerCard.current;
		// console.log(scrollWidth, offsetWidth);
		// console.log(innerCard);
		setWidth(scrollWidth - offsetWidth);
	}, [innerCard]);

	return (
		<motion.div className="flex h-full w-full overflow-hidden">
			<motion.div
				ref={innerCard}
				variants={variants}
				className="flex items-center justify-start w-full h-full cursor-grab"
				drag={"x"}
				dragConstraints={{
					right: 0,
					left: -width,
				}}
				style={{}}>
				{bookImages.map((img: any, i: number) => {
					return (
						<motion.div
							className="inline-flex relative min-w-max items-center justify-center min-h-max p-4 noselect"
							whileTap={{ cursor: "grabbing" }}
							key={i}
							onMouseEnter={(e) => {
								e.preventDefault();
								setBookDetailCard({
									isHover: true,
									isDrag: false,
									index: i,
								});
							}}
							onMouseLeave={(e) => {
								e.preventDefault();
								setBookDetailCard({
									isHover: false,
									isDrag: false,
									index: i,
								});
							}}>
							<Image
								className="w-full h-full self-center rounded-3xl noselect pointer-events-none object-fill max-h-auto"
								onContextMenu={(e) => {
									e.preventDefault();
								}}
								style={{
									width: "320px",
									height: "460px",
									border: "6px solid #1e1e1e",
									backgroundColor: "black",
									filter:
										bookDetailCard.isHover &&
										bookDetailCard.index === i
											? "brightness(20%) contrast(100%) saturate(30%) grayscale(100%) sepia(10%) hue-rotate(0deg) blur(0px)"
											: "",
									transition: "800ms",
								}}
								src={img}
								alt=""
							/>
							<div className="inline-flex absolute z-20 m-12 text-center font-bold text-lg w-auto h-auto">
								<h1
									style={{
										opacity:
											bookDetailCard.isHover &&
											bookDetailCard.index === i
												? "1"
												: "0",
									}}>
									{seedBook[i].title}
								</h1>
							</div>
						</motion.div>
					);
				})}
			</motion.div>
		</motion.div>
	);
};

{
	/* <h4 className="text-2xl font-semibold">
        How to Win Friends & Influence People
    </h4>
    <span className="text-2xl font-medium">by Dale Carnegie</span> */
}

export default BookSlider;
