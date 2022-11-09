import { OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { FunctionComponent, useEffect } from "react";
import Sun from "./Sun";

const MainScene: FunctionComponent = () => {
  const scene = useThree((state) => state.scene);
  const camera = useThree((state) => state.camera);
  useEffect(() => {
    console.log("✅ UseEffect resetting camera position");

    camera.translateX(100 - camera.position.x);
    camera.translateY(50 - camera.position.y);
    camera.translateZ(100 - camera.position.z);

    camera.far = 10000;
    //camera.translateX(500 - camera.position.x);
  }, []);

  return (
    <>
      <Sun />
    </>
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
