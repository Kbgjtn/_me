import ScrollProgressY from "@/components/modules/scrollProgress/scrollProgress";
import clsx from "clsx";
import { Trispace } from "next/font/google";
import { PropsWithChildren, useEffect } from "react";

const trispace = Trispace({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-space",
	weight: "400",
});

function Core({ children }: PropsWithChildren) {
	useEffect(() => {
		document.documentElement.classList.add(trispace.variable);
	}, []);

	return (
		<div id="__root" className={clsx([trispace.variable])}>
			<ScrollProgressY />
			{children}
		</div>
	);
}

export default Core;
