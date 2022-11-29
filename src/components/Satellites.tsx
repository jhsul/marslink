import { FunctionComponent, useContext } from "react";
import { SUN_RADIUS_AU } from "../main";
import { AppStateContext } from "./App";

const Satellites: FunctionComponent = () => {
  const { satellitePositions } = useContext(AppStateContext);
  return (
    <group>
      {satellitePositions.map((s, idx) => (
        <mesh key={idx} position={s}>
          <sphereGeometry attach="geometry" args={[SUN_RADIUS_AU, 32, 32]} />
          <meshStandardMaterial color="green" />
        </mesh>
      ))}
    </group>
  );
};
export default Satellites;
