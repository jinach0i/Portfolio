/* eslint-disable*/
import { Canvas, useLoader } from "@react-three/fiber";
import Footer from "../components/Footer";
import { GLTFLoader } from "three-stdlib";
import { Suspense } from "react";
import CanvasLoader from "../components/Loader";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";

export default function Contact() {
  const Earth = () => {
    const gltf = useLoader(GLTFLoader, "public/planet/scene.gltf");
    return (
      <>
        <primitive
          disposal={null}
          object={gltf.scene}
          scale={1.5}
          position-y={0}
          rotation-y={0}
        />
      </>
    );
  };
  return (
    <ContactWrap id="contactWrap">
      <div className="top">
        <div className="left">
          <p>끝까지 봐주셔서 감사합니다:D</p>
        </div>
        <Canvas
          shadows
          frameloop="demand"
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
          </Suspense>
        </Canvas>
      </div>

      <Footer />
    </ContactWrap>
  );
}
const ContactWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .top {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .left {
      width: 50%;
    }
    canvas {
      width: 50%;
    }
  }
`;
