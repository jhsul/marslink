import { Line, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { FunctionComponent, useEffect } from "react";
import Axes from "./Axes";
import Sun from "./Sun";

const MainScene: FunctionComponent = () => {
  const scene = useThree((state) => state.scene);
  const camera = useThree((state) => state.camera);
  useEffect(() => {
    console.log("✅ UseEffect resetting camera position");

    // camera.rotateY(Math.PI / 2);

    camera.translateX(1 - camera.position.x);
    camera.translateY(0.5 - camera.position.y);
    camera.translateZ(1 - camera.position.z);

    //camera.far = 10000;
    //camera.translateX(500 - camera.position.x);
  }, []);

  return (
    <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
      <Sun />
      <Axes />
    </group>
  );
};

const Scene: FunctionComponent = () => {
  return (
    <div className="scene-container">
      <Canvas>
        <ambientLight />
        <color attach="background" args={["black"]} />

        <OrbitControls autoRotate={true} autoRotateSpeed={0.4} />

        <MainScene />
      </Canvas>
    </div>
  );
};

export default Scene;
