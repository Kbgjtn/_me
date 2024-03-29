import { Center, OrbitControls, Preload, Text3D } from "@react-three/drei";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Floor from "./floor";

const MeThree = ({ isMobile }: { isMobile: boolean }): JSX.Element => {
   const ref = useRef<THREE.Group>(null);
   const gltf = useLoader(GLTFLoader, "/me.glb");

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
            <hemisphereLight intensity={0.4} groundColor="#f4f4f4" />
            <spotLight
               position={[10, 25, -50]}
               angle={1}
               penumbra={1}
               intensity={0.5}
               castShadow
               color={"white"}
               shadow-mapSize={1024}
            />
            <spotLight
               position={[10, 25, 30]}
               angle={1}
               penumbra={1}
               intensity={0.4}
               castShadow
               color={"white"}
               shadow-mapSize={1024}
            />
            <pointLight intensity={0.8} color={"#D99C52"} />
            <primitive
               object={gltf.scene}
               scale={1}
               position={isMobile ? [0, -3, -2.2] : [0, -2.25, -1.8]}
               rotation={[0, 0, -0.018]}
               normalScale={[0.15, 0.15]}
            />
            <primitive
               object={
                  new THREE.GridHelper(20, 20, gridLineColor, gridLineColor)
               }
               scale={0.8}
               position={[0.8, -3.15, -4.8]}
            />
         </mesh>
      </group>
   );
};

const MeThreeCanvas = () => {
   const color3 = new THREE.Color("#222326");

   return (
      <div className="max-w-screen h-[75vh] w-screen max-md:h-[80vh] ">
         <Canvas
            shadows
            dpr={[1, 2]}
            frameloop={"demand"}
            camera={{ position: [-20, -40, 20], fov: 40 }}
            gl={{ preserveDrawingBuffer: true }}
            performance={{ min: 0.5 }}
         >
            <Suspense fallback={<Floor />}>
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
                     size={1.5}
                     font="/inter_bold.json"
                  >
                     {`Hi, i'm dapa!`}

                     <meshPhysicalMaterial
                        color={color3}
                        clearcoat={1}
                        clearcoatRoughness={0.8}
                        metalness={0}
                        roughness={0.5}
                     />
                  </Text3D>
               </Center>
               <OrbitControls
                  enableDamping={true}
                  enableZoom={false}
                  minDistance={15}
                  maxDistance={40}
                  maxPolarAngle={Math.PI / 13}
                  minPolarAngle={Math.PI / 2.8}
                  autoRotate={true}
                  autoRotateSpeed={0.5}
               />

               <ambientLight color={"#F2AE2E"} intensity={0.28} />
            </Suspense>
            <Preload all={false} />
         </Canvas>
      </div>
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
