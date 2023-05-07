import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  PresentationControls,
  useGLTF,
} from "@react-three/drei";
import { Suspense } from "react";
import Floor from "./floor";

const MeThree = ({ isMobile }: { isMobile: boolean }): JSX.Element => {
  const me = useGLTF("/me2.glb");

  return (
    <mesh>
      <hemisphereLight intensity={0.3} groundColor="black" />
      <spotLight
        position={[0, 30, 50]}
        angle={1}
        penumbra={1}
        intensity={0.5}
        castShadow
        shadow-mapSize={1920}
      />
      <pointLight intensity={0.3} />
      <primitive
        object={me.scene}
        scale={1}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.8]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const MeThreeCanvas = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 7, 18], fov: 48 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-screen h-screen"
    >
      <Suspense fallback={<Floor position={[0, -1, 0]} />}>
        <OrbitControls
          enableDamping={true}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 15}
        />
        <ambientLight color={"white"} intensity={0.6} />

        <MeThree isMobile={true} />
      </Suspense>
      <Preload all={true} />
    </Canvas>
  );
};

export default MeThreeCanvas;
