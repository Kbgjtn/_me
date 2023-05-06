import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import Floor from "./floor";

const MeThree = ({ isMobile }: { isMobile: boolean }): JSX.Element => {
  const me = useGLTF("/me2.glb");

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <spotLight
        position={[0, 30, 50]}
        angle={1}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1440}
      />
      <pointLight intensity={0.4} />
      <primitive
        object={me.scene}
        scale={isMobile ? 0.7 : 0.5}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.8]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const MeThreeCanvas = () => {
  return (
    <div className="mt-24 w-full h-screen">
      <Canvas
        shadows
        dpr={[1, 4]}
        camera={{ position: [20, 7, 18], fov: 28 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full h-screen"
      >
        <Suspense fallback={<Floor position={[0, -1, 0]} />}>
          <OrbitControls
            enableDamping={true}
            enableZoom={true}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 15}
          />
          <ambientLight color={"white"} intensity={0.3} />

          <MeThree isMobile={false} />
        </Suspense>
        <Preload all={true} />
      </Canvas>
    </div>
  );
};

export default MeThreeCanvas;
