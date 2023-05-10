import NavBar from "@/components/modules/navbar/navigation-bar";
import Footer from "@/components/templates/footer/footer";

import { Fragment, PropsWithChildren } from "react";

function CommonLayout({ children }: PropsWithChildren) {
	return (
		<>
			<NavBar />
			{children}
			<Footer />
		</>
	);
}

export default CommonLayout;
