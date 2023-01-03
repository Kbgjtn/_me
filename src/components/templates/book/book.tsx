import Image from "next/image";
import projectsBackground from "../../../assets/images/projects-bg-me.png";

const Book = () => {
	return (
		<div className="w-full h-full bg-black flex flex-auto">
			<Image
				className="w-full h-auto bg-no-repeat"
				src={projectsBackground}
				alt=""
				draggable={"false"}
				referrerPolicy={"strict-origin-when-cross-origin"}
				width={1920}
				height={1080}
				quality={100}
				onContextMenu={(e) => e.preventDefault()}
			/>

			<div className="w-full flex absolute h-auto items-center justify-start py-12 flex-col">
				<div className="my-20">
					<h3 className="text-mdXL">Reading List</h3>
				</div>
				<div className="flex flex-col justify-between items-center h-full w-full gap-12">
					<div className="inline-flex justify-center items-center w-auto h-24 flex-col px-12">
						<h4 className="text-xl">
							How to Win Friends & Influence People
						</h4>
						<span className=" font-light">by Dale Carnegie</span>
					</div>
					<div className="inline-flex justify-center items-center w-auto h-24  flex-col px-12">
						<h4 className="text-xl">
							The Things You Can See Only When You Slow Down
						</h4>
						<span className=" font-light">by Haemin Sunim</span>
					</div>
					<div className="inline-flex justify-center items-center w-2/4 h-24 text-center  flex-col px-12">
						<h4 className="text-xl">
							Funiculi Funicula - Before the Coffee Gets Cold
						</h4>
						<span className=" font-light">
							by Toshikazu Kawaguchi
						</span>
					</div>
					<div className="inline-flex justify-center items-center w-2/4 h-24 text-center  flex-col px-12">
						<h4 className="text-xl">
							The Courage to Be Disliked: How to Free Yourself,
							Change your Life and Achieve Real Happiness
						</h4>
						<span className=" font-light">
							by Ichiro Kishimi, Fumitake Koga
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Book;
