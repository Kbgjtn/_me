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
    </>
  );
};

export default Project;
