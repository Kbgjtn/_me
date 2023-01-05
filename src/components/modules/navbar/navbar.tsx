import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Sosmed from "../modal/sosmed";

const NavBar = () => {
	const [isHoverHMU, setIsHoverHMU] = useState(false);

	const handleHoverHMU = () => {
		setIsHoverHMU(!isHoverHMU as boolean);
	};

	return (
		<motion.div
			className="w-full h-auto flex absolute items-center justify-center top-0 z-10 py-4 px-11"
			initial="hidden"
			animate="visible"
			exit="exit">
			<motion.dl
				className="
					inline-flex text-white font-cascode font-normal text-xl gap-20
					xl:text-2xl"
				variants={item}>
				<motion.dt variants={item}>
					<Link
						href="/"
						referrerPolicy={"no-referrer"}
						draggable={false}>
						me
					</Link>
				</motion.dt>
				<motion.dt variants={item}>
					<Link
						href="https://github.com/Kbgjtn"
						target={"_blank"}
						referrerPolicy={"no-referrer"}
						draggable={false}>
						repos
					</Link>
				</motion.dt>
				<motion.dt
					variants={item}
					onMouseEnter={() => handleHoverHMU()}
					onMouseLeave={() => handleHoverHMU()}>
					hmu
				</motion.dt>
			</motion.dl>
			<Sosmed isHover={isHoverHMU} />
		</motion.div>
	);
};

export default NavBar;

const item = {
	hidden: { y: -20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 260,
			damping: 15,
		},
	},
	exit: { y: 20, opacity: 0 },
};

const transtionListItem = {
	hidden: {
		x: "-30px",
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			delay: 0.6,
			stiffness: 250,
			damping: 25,
		},
	},
	exit: { y: 20, opacity: 0 },
};
