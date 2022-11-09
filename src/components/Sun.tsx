import { FunctionComponent } from "react";

const Sun: FunctionComponent = () => {
  return (
    <>
      <mesh>
        <sphereGeometry attach="geometry" args={[20, 32, 32]} />
        <meshStandardMaterial color="yellow" />
      </mesh>
      <mesh position={[50, 0, 0]}>
        <boxGeometry attach="geometry" args={[20, 32, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
};

export default Sun;
