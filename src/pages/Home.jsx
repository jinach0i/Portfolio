import styled from "styled-components";
import { Canvas, useLoader } from "@react-three/fiber";
import {motion} from 'framer-motion';
import {slideIn} from '../utils/motion';
import { GLTFLoader } from "three-stdlib";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Button from '@mui/material/Button';
import styles from "../assets/css/Home.module.css";
export default function Home() {
  const Minerals = () => {
    const gltf = useLoader(GLTFLoader, "public/blue_crystals/scene.gltf");
    return (
      <><primitive
      dispose={null}
      object={gltf.scene}
      scale={2.5}
    /></>
      
    );
  };
  return (
    <HomeWrap id="wrap">
      <div className="left">
        <div className="titleBox">
          <p>안녕하세요.</p>
          <p>예비 프론트엔드 개발자</p>
          <p><span>최혜진</span>입니다.</p>
        </div>
        <Button variant="contained">둘러보기</Button>
      </div>
        <Canvas
          shadows
          frameloop="demand"
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
          camera={{
            fov: 50,
            near: 0.1,
            far: 100,
            position: [-4, 2, 50],
          }}
        >
          <ambientLight intensity={20} />
          <spotLight intensity={0.6} angle={0.1} penumbra={2} position={[10,15,10]} castShadow />
          <Suspense fallback={null}>
          <Minerals />
          </Suspense>
          <OrbitControls
              autoRotate
              enableZoom={false}
            />
        </Canvas>
    </HomeWrap>
  );
}
const HomeWrap = styled.div`
  display: flex; justify-content: center;
  .left{
    width: 50dvw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 40px;
      .titleBox{
        text-align: left;
        line-height: 68px;
        font-size: 40px;
        margin-bottom: 40px;
        span{margin: 0 8px; font-size: 48px;}
      }
      button{width: 120px;
        background: black;
        color: white;
        font-weight: bold;
        font-size: 16px;
        height: 48px;
        letter-spacing: 2px;}
  }
  canvas{transform: translate(15px,20%); cursor: grab;}
`;
