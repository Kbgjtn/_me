import Floor from "./floor";
import { ElementRef, Suspense, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Text,
  Preload,
  useGLTF,
  Center,
  Text3D,
  Decal,
  AdaptiveDpr,
} from "@react-three/drei";
import clsx from "clsx";
import { group } from "console";

const MeThree = ({ isMobile }: { isMobile: boolean }): JSX.Element => {
  const ref = useRef<THREE.Group>(null);
  const me = useGLTF("/me2.glb");
  const gridLineColor = new THREE.Color("#3c3c3c");
  const mouse = useLerpedMouse();

  useFrame(() => {
    if (ref.current) {
      (ref.current as THREE.Group).rotation.y =
        (mouse.current.x * Math.PI) / 10;
      (ref.current as THREE.Group).rotation.x =
        (mouse.current.y * Math.PI) / 1000;
    }
  });

  return (
    <group ref={ref} dispose={null}>
      <mesh>
        <hemisphereLight intensity={0.6} groundColor="#f4f4f4" />
        <spotLight
          position={[0, 30, 30]}
          angle={1}
          penumbra={1}
          intensity={0.7}
          castShadow
          color={"#DFDFDE"}
          shadow-mapSize={1024}
        />
        <pointLight intensity={0.4} color={"#DFDFDE"} />
        <primitive
          object={me.scene}
          scale={1}
          position={isMobile ? [0, -3, -2.2] : [0, -2.25, -1.8]}
          rotation={[0, 0, -0.018]}
          normalScale={[0.15, 0.15]}
        />
        <primitive
          object={new THREE.GridHelper(20, 20, gridLineColor, gridLineColor)}
          scale={0.8}
          position={[0.8, -3.15, -4.8]}
        />
      </mesh>
    </group>
  );
};

const MeThreeCanvas = () => {
  const [dpr, setDpr] = useState(1.5);
  const color3 = new THREE.Color("#444444");
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      frameloop={"demand"}
      camera={{ position: [-20, 8, 20], fov: 48 }}
      gl={{ preserveDrawingBuffer: true }}
      performance={{ min: 0.5 }}
      className="w-full h-screen"
    >
      <Suspense fallback={<Floor position={[0, 0, 5]} />}>
        <MeThree isMobile={true} />
        <Center bottom position={[1, 0, 0]} rotation={[-0.3, 0, 0]}>
          <Text3D
            curveSegments={32}
            bevelEnabled
            bevelSize={0.04}
            bevelThickness={0.12}
            height={0.5}
            lineHeight={0.8}
            letterSpacing={-0.06}
            size={1.4}
            font="/inter_bold.json"
          >
            {`Hi, i'm dapa!`}

            <meshPhysicalMaterial
              color={color3}
              clearcoat={1}
              clearcoatRoughness={0.1}
              metalness={0}
              roughness={0.1}
            />
          </Text3D>
        </Center>
        <OrbitControls
          enableDamping={true}
          enableZoom={false}
          maxPolarAngle={Math.PI / 13}
          minPolarAngle={Math.PI / 2.8}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />

        <ambientLight color={"#f3f3f3"} intensity={0.28} />
      </Suspense>
      <Preload all={true} />
    </Canvas>
  );
};

function useLerpedMouse() {
  const mouse = useThree((state) => state.mouse);
  const lerped = useRef(mouse.clone());
  const previous = new THREE.Vector2();
  useFrame((state) => {
    previous.copy(lerped.current);
    lerped.current.lerp(mouse, 0.1);
    // Regress system when the mouse is moved
    if (!previous.equals(lerped.current)) state.performance.regress();
  });
  return lerped;
}

export default MeThreeCanvas;
