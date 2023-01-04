import Link from "next/link";
import { useState } from "react";
import Sosmed from "../modal/sosmed";

const NavBar = () => {
	const [isHoverHMU, setIsHoverHMU] = useState(false);

	const handleHoverHMU = () => {
		setIsHoverHMU(!isHoverHMU as boolean);
	};

	return (
		<div className="w-full h-auto flex absolute items-center justify-center top-0 py-4 px-11">
			<dl
				className="
					inline-flex text-white font-cascode font-normal text-xl gap-20
					xl:text-2xl">
				<dt>
					<Link
						href="/"
						referrerPolicy={"no-referrer"}
						draggable={false}>
						me
					</Link>
				</dt>
				<dt>
					<Link
						href="https://github.com/Kbgjtn"
						target={"_blank"}
						referrerPolicy={"no-referrer"}
						draggable={false}>
						repos
					</Link>
				</dt>
				<dt
					onMouseEnter={() => handleHoverHMU()}
					onMouseLeave={() => handleHoverHMU()}>
					hmu
				</dt>
			</dl>
			<Sosmed isHover={isHoverHMU} />
		</div>
	);
};

export default NavBar;
