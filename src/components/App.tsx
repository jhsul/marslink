import React from "react";
import { FunctionComponent, useEffect, useState } from "react";
import { AppState, VSOP87Data } from "../types";
// import { HeliocentricPosition } from "../types";

//@ts-ignore
import vsop87c from "vsop87/dist/vsop87c";

//import vsop87cLoader from "vsop87/dist/vsop87c-wasm";

import Scene from "./Scene";
import { getJulianDate } from "../orbit";
import UserInterface from "./UserInterface";

//const vsop87c = await vsop87cLoader;

const RENDER_DELTA_MS = 20;

export const AppStateContext = React.createContext<AppState>({} as AppState);

const App: FunctionComponent = () => {
  const [time, setTime] = useState<Date>(new Date());
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(1);
  const [planetPositions, setPlanetPositions] = useState<VSOP87Data>({});

  useEffect(() => {
    //console.log(`✅ UseEffect updating time: ${time.toDateString()}`);

    const data = vsop87c(getJulianDate(time));

    //console.log(data);
    setPlanetPositions(data);
  }, [time]);

  useEffect(() => {
    console.log(
      `🚩 UseEffect starting playback loop with delta: ${RENDER_DELTA_MS}ms`
    );

    const interval = setInterval(() => {
      if (isPlaying) {
        setTime((t) => {
          const newTime = new Date(t.getTime() + speed * 86400000);
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
        planetPositions,
        isPlaying,
        speed,
        setIsPlaying,
        setSpeed,
      }}
    >
      <Scene />
      <UserInterface />
    </AppStateContext.Provider>
  );
};

export default App;
