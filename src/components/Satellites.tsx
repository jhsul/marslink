import { Circle, Line } from "@react-three/drei";
import { FunctionComponent, useContext } from "react";
import { LineLoop } from "three";
import { SUN_RADIUS_AU } from "../main";
import { AppStateContext } from "./App";

const SHELL_SEGMENTS = 100;

const Satellites: FunctionComponent = () => {
  const { satellitePositions, shellConfig, setShellConfig } =
    useContext(AppStateContext);
  return (
    <group>
      <>
        {satellitePositions.map((s, i) => (
          <mesh key={i} position={s}>
            <sphereGeometry
              attach="geometry"
              args={[SUN_RADIUS_AU / 1.5, 32, 32]}
            />
            <meshStandardMaterial color="hotpink" />
          </mesh>
        ))}
      </>
      <>
        {shellConfig.shells.map((s, i) => (
          <Line
            points={Array(SHELL_SEGMENTS + 1)
              .fill(0)
              .map((_, i) => {
                const theta = (i / SHELL_SEGMENTS) * 2 * Math.PI;
                return [s.r * Math.cos(theta), s.r * Math.sin(theta), 0];
              })}
            onClick={() => setShellConfig((sc) => ({ ...sc, currentShell: i }))}
            key={i}
            opacity={0.5}
            transparent
            color={i === shellConfig.currentShell ? "cyan" : "white"}
          />
        ))}
      </>
    </group>
  );
};
export default Satellites;
