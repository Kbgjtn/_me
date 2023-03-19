import { motion } from "framer-motion";
import { useState } from "react";
import BookLogoSvg from "../../../assets/images/BookLogo";
import GithubLogoSvg from "../../../assets/images/GithubLogo";
import MeLogo from "../../../assets/images/MeLogo";
import ProjectLogoSvg from "../../../assets/images/ProjectLogo";

const NavBar = () => {
	const [hoverLogoName, setHoverLogoName] = useState<string>("");
	const handleClickScroll = () => {
		const element = document.getElementById("reading-list");
		if (element) {
			// 👇 Will scroll smoothly to the top of the next section
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<motion.nav
			className="w-full h-auto bg-charcoal flex flex-col relative items-center justify-center top-0 z-1 py-4 px-11 "
			initial="hidden"
			animate="visible"
			exit="exit">
			<motion.dl
				className="flex relative justify-center items-center font-medium text-white font-cascode text-xl gap-[2rem] xl:text-2xl"
				variants={item}>
				{[
					["me", "/", <MeLogo title={hoverLogoName} key="1" />],
					[
						"repository",
						"https://github.com/Kbgjtn",
						<GithubLogoSvg key="2" title={hoverLogoName} />,
					],
					[
						"book",
						"#reading-list",
						<BookLogoSvg title={hoverLogoName} key="3" />,
					],
					[
						"project",
						"#project-list",
						<ProjectLogoSvg title={hoverLogoName} key="4" />,
					],
				].map(([title, url, svg]) => (
					<a
						href={url as string}
						onMouseEnter={() => setHoverLogoName(title as string)}
						onMouseLeave={() => setHoverLogoName("")}
						draggable={false}
						key={`${title}`}
						style={{ transition: "500ms" }}
						referrerPolicy={"no-referrer"}
						title={title as string}>
						{svg}
					</a>
				))}
			</motion.dl>
			{hoverLogoName ? (
				<motion.div
					className="text-center font-normal text-xs absolute top-20 mx-auto opacity-30"
					variants={sentence}
					initial="hidden"
					animate="visible">
					{`./${hoverLogoName}`.split("").map((char, index) => {
						return (
							<motion.span
								className=""
								key={char + "-" + index}
								variants={letter}>
								{char}
							</motion.span>
						);
					})}
				</motion.div>
			) : null}
		</motion.nav>
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

const a = `
<motion.dl
          className="
					inline-flex font-semibold text-white font-cascode text-xl gap-[2rem]
					xl:text-2xl"
          variants={item}
        >
          <motion.dt
            variants={item}
            onMouseEnter={handleHoverLogo}
            onMouseLeave={handleUnhoverLogo}
          >
            <Link
              href={"https://github.com/Kbgjtn"}
              target={"_blank"}
              referrerPolicy={"no-referrer"}
              draggable={false}
            >
              <GithubLogoSvg isHover={isHoverLogo} />
            </Link>
          </motion.dt>
          <motion.dt>
            <p className="cursor-pointer" onClick={() => handleClickScroll()}>
              <BookLogoSvg isHover={isHoverLogo} />
            </p>
          </motion.dt>
        </motion.dl>
`;
