import { Line, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { FunctionComponent, useEffect } from "react";
import Axes from "./Axes";
import Path from "./Path";
import Satellites from "./Satellites";
import SolarSystem from "./SolarSystem";

const REFRESH_DELTA = 20;

const MainScene: FunctionComponent = () => {
  const scene = useThree((state) => state.scene);
  const camera = useThree((state) => state.camera);

  useEffect(() => {
    console.log("✅ UseEffect resetting camera position");

    // camera.rotateY(Math.PI / 2);

    camera.translateX(2 - camera.position.x);
    camera.translateY(1 - camera.position.y);
    camera.translateZ(2 - camera.position.z);

    //camera.far = 10000;
    //camera.translateX(500 - camera.position.x);
  }, []);

  return (
    <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
      <SolarSystem />
      <Satellites />
      <Path />
      <Axes />
    </group>
  );
};

const Scene: FunctionComponent = () => {
  return (
    <div className="scene-container">
      <Canvas gl={{ preserveDrawingBuffer: true }}>
        <ambientLight />
        <color attach="background" args={["black"]} />

        <OrbitControls />

        <MainScene />
      </Canvas>
    </div>
  );
};

export default Scene;
