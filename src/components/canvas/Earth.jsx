import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import {GLTFLoader} from 'three-stdlib';
import { OrbitControls, Preload } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useLoader(GLTFLoader,"public/planet/scene.gltf");

  return (
    <primitive disposal={null} object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
