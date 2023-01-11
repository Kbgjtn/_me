import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import mainBackground from "../../../assets/images/home-bg-me.png";
import Mac from "../../../assets/images/Mac";
import meAsMan from "../../../assets/images/Western-Man-me.png";
import NavBar from "../../modules/navbar/navbar";

const Me = () => {
	const [isHoverMe, setIsHoverMe] = useState(false);

	const handleMouseEnterHoverMe = () => {
		setIsHoverMe(true);
	};
	const handleMouseLeaveHoverMe = () => {
		setIsHoverMe(false);
	};

	return (
		<motion.div className="w-full h-full flex flex-shrink-1 flex-col overflow-hidden">
			<Image
				className="inline-flex object-cover z-0 min-h-full min-w-full h-screen w-screen"
				src={mainBackground}
				alt=""
				draggable={"false"}
				referrerPolicy={"strict-origin-when-cross-origin"}
				quality={100}
				onContextMenu={(e) => e.preventDefault()}
			/>
			<NavBar />
			<div className="inline-flex absolute justify-center items-center flex-col w-full h-full m-0-auto">
				<div className="flex w-full max-h-auto h-auto self-center relative flex-col justify-center items-center">
					<div>
						<Image
							className="inline-flex noselect w-48 h-auto sm:w-64 md:w-64 lg:w-72 xl:w-80 2xl:w-auto"
							src={meAsMan}
							alt="me as men"
							draggable={false}
							referrerPolicy={"strict-origin-when-cross-origin"}
							quality={100}
							onMouseEnter={(e) => {
								e.preventDefault();
								handleMouseEnterHoverMe();
							}}
							onMouseLeave={(e) => {
								e.preventDefault();
								handleMouseLeaveHoverMe();
							}}
							onContextMenu={(e) => e.preventDefault()}
						/>
					</div>
					<div
						className="inline-flex items-center justify-center overflow-hidden p-0 w-48 h-auto sm:w-64 md:w-auto lg:w-auto xl:w-auto scale-110 2xl:w-auto scale-120"
						onContextMenu={(e) => e.preventDefault()}>
						<Mac />
					</div>

					{isHoverMe ? (
						<motion.div className="flex absolute z-10 items-center justify-center bottom-40 -translate-y-48  sm:-translate-y-64 md:-translate-y-72 xl:-translate-y-72 lg:-translate-y-72 2xl:-translate-y-72">
							<motion.div
								className="flex gap-0 fixed"
								variants={transitionShodowCardInfo}>
								<div
									className="p-6 absolute rounded-t-lg rounded-r-3xl rounded-l-full rounded-b-lg top-0 right-12"
									// className="p-8 absolute rounded-t-lg rounded-r-3xl rounded-l-full rounded-b-lg top-0 right-12"
									style={{
										background: "rgba(225, 225, 225, .8)",
										filter: "blur(48.5)",
									}}></div>
								<div
									className="p-6 absolute rounded-t-lg rounded-r-3xl rounded-l-full rounded-b-lg top-0 right-2"
									style={{
										background: "#252525",
										filter: "blur(48.5)",
									}}></div>
								<div
									className="p-6 absolute rounded-t-lg rounded-r-3xl rounded-l-full rounded-b-lg bottom-1 right-12"
									style={{
										background: "rgba(234, 21, 225, .8)",
										filter: "blur(40.5)",
									}}></div>
							</motion.div>
							<motion.div
								variants={transitionCardInfo}
								className="inline-flex self-center w-72 h-auto justify-center items-center p-4 sm:w-72 md:w-80 lg:w-80 xl:w-80 2xl:w-80"
								// className="inline-flex self-center w-80 h-44 justify-center items-center px-6"
								style={{
									borderRadius: "50px",
									background: "rgba(0, 0, 0, 0.5)",
									backdropFilter: "blur(30px)",
								}}>
								<p className=" font-normal text-lg text-center sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">
									{`hii, i'm Naufal Daffa Ryquelme nice to know you, budz!!:))`}
								</p>
							</motion.div>
						</motion.div>
					) : null}
				</div>
				<motion.div className="inline-flex flex-col w-full h-auto relative self-end justify-self-end m-0-auto justify-start items-center overflow-hidden">
					<h1 className="inline-flex font-extrabold m-0-auto text-7xl sm:text-8xl md:text-10xl lg:text-12xl xl:text-14xl 2xl:text-16xl">
						Daffa.r
					</h1>
					<div
						className="inline-flex noselect self-center w-full h-0 rounded-full text-center bg-black justify-self-center"
						draggable={false}
						style={{
							boxShadow:
								"0px -80px 70px 20px rgb(28, 28, 28, 0.7)",
							// tablet min-w-768px 0px -26px 70px 28px #1c1c1c
						}}></div>
				</motion.div>
			</div>
		</motion.div>
	);
};
export default Me;

const transitionCardInfo = {
	hidden: { y: 50, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 260,
			damping: 40,
		},
	},
	exit: { y: 50, opacity: 0 },
};

const transitionShodowCardInfo = {
	hidden: { y: 0, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 0.5,
			type: "spring",
			stiffness: 260,
			damping: 40,
		},
	},
	exit: { x: 10, opacity: 0 },
};
