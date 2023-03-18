import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
// import mainBackground from "../../../assets/images/home-bg-me.png";
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
		<React.Fragment>
			<Head>
				<title>Daffa Requelme</title>
				<link
					rel="canonical"
					href="https://example.com/blog/original-post"
					key="canonical"
				/>
			</Head>
			<NavBar />
			<motion.div className="w-full h-full flex flex-col bg-charcoal">
				{/*<Image
          className="inline-flex object-cover z-0 min-h-full min-w-full h-screen w-screen"
          src={mainBackground}
          alt=""
          draggable={"false"}
          referrerPolicy={"strict-origin-when-cross-origin"}
          quality={100}
          onContextMenu={(e) => e.preventDefault()}
        /> */}
				<div
					className="inline-flex absolute justify-center items-center flex-col w-full h-full m-0-auto"
					onMouseEnter={(e) => {
						e.preventDefault();
						handleMouseEnterHoverMe();
					}}
					onMouseLeave={(e) => {
						e.preventDefault();
						handleMouseLeaveHoverMe();
					}}>
					<div className="flex w-full max-h-auto h-auto self-center relative flex-col justify-center items-center">
						<div>
							<Image
								className="inline-flex noselect w-[200px] h-auto sm:w-[250px] md:w-[260px] lg:w-[300px] xl:w-[300px] 2xl:w-[300px]"
								src={meAsMan}
								alt="me as men"
								draggable={false}
								referrerPolicy={
									"strict-origin-when-cross-origin"
								}
								quality={100}
								onContextMenu={(e) => e.preventDefault()}
							/>
						</div>
						<div
							className="inline-flex items-center justify-center overflow-hidden p-0 w-52 h-auto sm:w-64 md:w-auto lg:w-auto xl:w-auto scale-110 2xl:w-auto scale-120"
							onContextMenu={(e) => e.preventDefault()}>
							<Mac />
						</div>

						{isHoverMe ? (
							<motion.div className="flex absolute z-10 items-center justify-center bottom-40 -translate-y-48  sm:-translate-y-[16rem] md:-translate-y-[18rem] lg:-translate-y-[19rem] xl:-translate-y-[20rem] 2xl:-translate-y-[22rem]">
								<motion.div
									variants={transitionCardInfo}
									className="flex m-auto self-center bg-charcoal rounded-[1.5rem] w-52 h-auto justify-center items-center sm:w-80 md:w-96 lg:w-[22rem] xl:w-[26rem] 2xl:w-[30rem]"
									style={{
										boxShadow: `0px 8px 18px #000000`,
										border: "4px solid #1A1A1A",
									}}>
									<p className="font-medium p-4 relative text-center text-mn sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm">
										{`hii, i'm a student at Binus University (Comp. Science), nice to meet you, budz!!:))`}
									</p>
								</motion.div>
							</motion.div>
						) : null}
					</div>
					<motion.div className="inline-flex flex-col w-full h-auto relative self-end justify-self-end m-0-auto justify-start items-center overflow-hidden">
						<h1 className="inline-flex font-extrabold m-0-auto text-7xl sm:text-8xl md:text-8xl lg:text-8xl xl:text-9xl 2xl:text-10xl">
							Daffa.R
						</h1>
						<div
							className="inline-flex noselect self-center w-full h-0 rounded-full text-center bg-black justify-self-center"
							draggable={false}
							style={{
								boxShadow:
									"0px -80px 70px 20px rgb(28, 28, 28, 0.7)",
							}}></div>
					</motion.div>
				</div>
			</motion.div>
		</React.Fragment>
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
