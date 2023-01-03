import Link from "next/link";
import { useState } from "react";
import Sosmed from "../modal/sosmed";

const NavBar = () => {
	const [isHoverHMU, setIsHoverHMU] = useState(false);

	const handleHoverHMU = () => {
		setIsHoverHMU(!isHoverHMU as boolean);
	};

	return (
		<div className="w-full h-auto z-10 flex absolute items-center justify-center py-4 px-11">
			<dl className="inline-flex text-white gap-28 font-cascode font-normal text-lg">
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
