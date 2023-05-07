import Masonry from "../../modules/Mansory/masonry";
import { seederProject } from "../../modules/Mansory/seederProject";

const Project = () => {
  return (
    <>
      <Masonry title={"Project"} projects={seederProject} />
    </>
  );
};

export default Project;
