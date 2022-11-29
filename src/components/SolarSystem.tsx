import { Vector3 } from "@react-three/fiber";
import { FunctionComponent, useContext } from "react";
import { AU_KM, SUN_RADIUS_AU, SUN_RADIUS_KM } from "../main";
import { AppStateContext } from "./App";

const SolarSystem: FunctionComponent = () => {
  const { earthPosition, marsPosition } = useContext(AppStateContext);
  return (
    <>
      <mesh>
        <sphereGeometry attach="geometry" args={[SUN_RADIUS_AU, 32, 32]} />
        <meshStandardMaterial color="yellow" />
      </mesh>
      <mesh position={earthPosition}>
        <sphereGeometry attach="geometry" args={[SUN_RADIUS_AU, 32, 32]} />
        <meshStandardMaterial color="cyan" />
      </mesh>
      <mesh position={marsPosition}>
        <sphereGeometry attach="geometry" args={[SUN_RADIUS_AU, 32, 32]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </>
  );
};

export default SolarSystem;
