import { Vector3 } from "@react-three/fiber";
import { FunctionComponent, useContext } from "react";
import { AU_KM, EARTH_RADIUS_KM, SUN_RADIUS_KM } from "../main";
import { AppStateContext } from "./App";

const Sun: FunctionComponent = () => {
  const { planetPositions } = useContext(AppStateContext);
  return (
    <>
      <mesh>
        <sphereGeometry
          attach="geometry"
          args={[SUN_RADIUS_KM / AU_KM, 32, 32]}
        />
        <meshStandardMaterial color="yellow" />
      </mesh>
      {planetPositions &&
        Object.keys(planetPositions).map((planet) => {
          const position = [
            planetPositions[planet].x,
            planetPositions[planet].y,
            planetPositions[planet].z,
          ] as Vector3;
          return (
            <group position={position} key={planet}>
              <mesh>
                <sphereGeometry
                  attach="geometry"
                  args={[SUN_RADIUS_KM / AU_KM, 32, 32]}
                />
                <meshStandardMaterial color="cyan" />
              </mesh>
            </group>
          );
        })}
    </>
  );
};

export default Sun;
