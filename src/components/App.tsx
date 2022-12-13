import React from "react";
import { FunctionComponent, useEffect, useState } from "react";
import { AppState, ShellConfig } from "../types";
// import { HeliocentricPosition } from "../types";

//@ts-ignore
//import vsop87c from "vsop87/dist/vsop87c";

import Scene from "./Scene";
import {
  getJulianDate,
  getPlanetPositions,
  getSatellitePositions,
} from "../physics";
import UserInterface from "./UserInterface";

import { Vector3 } from "@react-three/fiber";
import Header from "./Header";
import { getPath } from "../search";

const RENDER_DELTA_MS = 20;

const DEFAULT_SHELL_CONFIG: ShellConfig = {
  currentShell: 0,
  shells: [
    { n: 20, r: 0.8 },
    { n: 20, r: 0.9 },
    { n: 20, r: 1.1 },
    { n: 20, r: 1.2 },
    { n: 20, r: 1.3 },
    { n: 40, r: 1.4 },
    { n: 40, r: 1.5 },
  ],
};

export const AppStateContext = React.createContext<AppState>({} as AppState);

const App: FunctionComponent = () => {
  const [time, setTime] = useState<Date>(new Date());
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(1);

  const [marsPosition, setMarsPosition] = useState<Vector3>([0, 0, 0]);
  const [earthPosition, setEarthPosition] = useState<Vector3>([0, 0, 0]);
  // const [planetPositions, setPlanetPositions] = useState<VSOP87Data>({});
  const [satellitePositions, setSatellitePositions] = useState<Vector3[]>([]);

  const [path, setPath] = useState<Vector3[] | null>(null);

  const [shellConfig, setShellConfig] =
    useState<ShellConfig>(DEFAULT_SHELL_CONFIG);

  const [p, setP] = useState<number>(0);

  useEffect(() => {
    const { earth, mars } = getPlanetPositions(time);
    const satellites = getSatellitePositions(shellConfig, time);

    setEarthPosition(earth);
    setMarsPosition(mars);

    setSatellitePositions(satellites);

    const path = getPath(earth, mars, satellites, 0.3);
    // console.log(path);
    setPath(path);
  }, [time, shellConfig]);

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
        path,
        shellConfig,
        p,
        setIsPlaying,
        setSpeed,
        setP,
        setPath,
        setShellConfig,
      }}
    >
      <Scene />
      <Header />
      <UserInterface />
    </AppStateContext.Provider>
  );
};

export default App;
