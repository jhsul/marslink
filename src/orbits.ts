import { Vector3 } from "@react-three/fiber";

//@ts-ignore
import vsop87cLoader from "vsop87/dist/vsop87c-wasm";

const vsop87c = await vsop87cLoader;

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

export const getSatellitePositions = (n: number, r: number) => {
  const positions: Vector3[] = [];
  for (let i = 0; i < n; i++) {
    const theta = (i * 2 * Math.PI) / n;
    const x = r * Math.cos(theta);
    const y = r * Math.sin(theta);
    positions[i] = [x, y, 0];
  }
  return positions;
};
