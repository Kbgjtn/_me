import Masonry from "../../modules/Mansory/masonry";
import { seederProject } from "../../modules/Mansory/seederProject";

const Project = () => {
  return (
    <div className="bg-charcoal">
      <Masonry title={"Project"} projects={seederProject} />
    </div>
  );
};

export default Project;
