import { Html, useProgress } from "@react-three/drei";
import { LoadingBar } from "../ui/loadingBar";

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
      {/*       <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
 */}
      <LoadingBar loading={parseInt(progress.toString())} />
      <mesh {...props} recieveShadow>
        <boxBufferGeometry args={[20, 1, 10]} />
        <meshPhysicalMaterial color="white" />
      </mesh>
    </Html>
  );
}

export default Floor;
