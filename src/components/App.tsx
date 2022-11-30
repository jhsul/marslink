import React from "react";
import { FunctionComponent, useEffect, useState } from "react";
import { AppState } from "../types";
// import { HeliocentricPosition } from "../types";

//@ts-ignore
//import vsop87c from "vsop87/dist/vsop87c";

import Scene from "./Scene";
import {
  getJulianDate,
  getPlanetPositions,
  getSatellitePositions,
} from "../orbits";
import UserInterface from "./UserInterface";

import { Vector3 } from "@react-three/fiber";
import DateLabel from "./DateLabel";

const RENDER_DELTA_MS = 20;

export const AppStateContext = React.createContext<AppState>({} as AppState);

const App: FunctionComponent = () => {
  const [time, setTime] = useState<Date>(new Date());
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(1);

  const [marsPosition, setMarsPosition] = useState<Vector3>([0, 0, 0]);
  const [earthPosition, setEarthPosition] = useState<Vector3>([0, 0, 0]);
  // const [planetPositions, setPlanetPositions] = useState<VSOP87Data>({});
  const [satellitePositions, setSatellitePositions] = useState<Vector3[]>([]);

  const [n, setN] = useState<number>(20);
  const [r, setR] = useState<number>(1.3);

  const [p, setP] = useState<number>(0);

  useEffect(() => {
    const { earth, mars } = getPlanetPositions(time);

    setEarthPosition(earth);
    setMarsPosition(mars);

    // setSatellitePositions(getSatellitePositions(10, 1));
  }, [time]);

  useEffect(() => {
    setSatellitePositions(getSatellitePositions(n, r));
  }, [n, r]);

  useEffect(() => {
    console.log(
      `🚩 UseEffect starting playback loop with delta: ${RENDER_DELTA_MS}ms`
    );

    const interval = setInterval(() => {
      if (isPlaying) {
        setTime((t) => {
          const newTime = new Date(
            t.getTime() + (speed * 86400000) / RENDER_DELTA_MS
          );
          return newTime;
        });
      }
    }, RENDER_DELTA_MS);

    return () => {
      console.log(`🏁 UseEffect stopping playback loop`);
      clearInterval(interval);
    };
  }, [isPlaying, speed]);

  return (
    <AppStateContext.Provider
      value={{
        time,
        marsPosition,
        earthPosition,
        satellitePositions,
        isPlaying,
        speed,
        setIsPlaying,
        setSpeed,
        r,
        n,
        p,
        setR,
        setN,
        setP,
      }}
    >
      <Scene />
      <DateLabel />
      <UserInterface />
    </AppStateContext.Provider>
  );
};

export default App;
