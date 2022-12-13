import { Vector3 } from "@react-three/fiber";

//@ts-ignore
import vsop87cLoader from "vsop87/dist/vsop87c-wasm";
import { AU_KM } from "./main";
import { ShellConfig } from "./types";

const vsop87c = await vsop87cLoader;

const G = 6.67408e-11;
const ME = 5.972e24;

// https://stackoverflow.com/questions/11759992/calculating-jdayjulian-day-in-javascript
export const getJulianDate = (date: Date) => {
  return date.getTime() / 86400000 + 2440587.5;
};

export const getPlanetPositions = (date: Date) => {
  const vsopData = vsop87c(getJulianDate(date));

  return {
    earth: [vsopData.earth.x, vsopData.earth.y, vsopData.earth.z] as Vector3,
    mars: [vsopData.mars.x, vsopData.mars.y, vsopData.mars.z] as Vector3,
  };
};

export const getSatellitePositions = (shellConfig: ShellConfig, time: Date) => {
  return shellConfig.shells.flatMap((shell) =>
    getOrbitalShell(shell.n, shell.r, time)
  );
};

export const getOrbitalShell = (n: number, r: number, time: Date) => {
  const positions: Vector3[] = [];
  const omega = getAngularVelocity(r * AU_KM);
  const offset = (time.getTime() / 1000) * omega;
  for (let i = 0; i < n; i++) {
    const theta = (i * 2 * Math.PI) / n + offset;
    const x = r * Math.cos(theta);
    const y = r * Math.sin(theta);
    positions[i] = [x, y, 0];
  }
  return positions;
};

const getAngularVelocity = (r: number) => {
  return Math.sqrt((G * ME) / r ** 3) / (180 / Math.PI);
};

const getMaxDistance = (p: number) => {};
