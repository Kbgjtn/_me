import { Html, useProgress } from "@react-three/drei";
import { LoadingBar } from "@/components/ui/loadingBar";

function Floor(props: any) {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader"></span>
      <LoadingBar loading={parseInt(progress.toString())} />
    </Html>
  );
}

export default Floor;
