import Head from "next/head";
import FrameMountain from "../../../assets/images/FrameMountain";
import Masonry from "../../modules/Mansory/masonry";
import { seederProject } from "../../modules/Mansory/seederProject";

const Project = () => {
	return (
		<>
			<Head>
				<title>Daffa Requelme - Project</title>
				<link
					rel="canonical"
					href="https://example.com/blog/original-post"
					key="canonical"
				/>
			</Head>
			<Masonry title={"Project"} projects={seederProject} />
			<div className="w-full h-full flex bg-charcoal justify-center items-center">
				<div className="flex relative font-medium justify-center items-center text-center text-sm">
					<h4 className="absolute m-auto z-30 w-max text-center">
						Under Development :)
					</h4>
					<div className="flex w-full h-full relative">
						<FrameMountain />
					</div>
				</div>
			</div>
		</>
	);
};

export default Project;
