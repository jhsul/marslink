import React from "react";
import { FunctionComponent, useEffect, useState } from "react";
import { AppState, VSOP87Data } from "../types";
// import { HeliocentricPosition } from "../types";

//@ts-ignore
import vsop87c from "vsop87/dist/vsop87c";

import Scene from "./Scene";
import { getJulianDate } from "../orbit";

export const AppStateContext = React.createContext<AppState>({} as AppState);

const App: FunctionComponent = () => {
  const [time, setTime] = useState<Date>(new Date());
  const [planetPositions, setPlanetPositions] = useState<VSOP87Data>({});

  useEffect(() => {
    console.log(`✅ UseEffect updating time: ${time.toDateString()}`);

    const data = vsop87c(getJulianDate(time));

    console.log(data);
    setPlanetPositions(data);
  }, [time]);

  return (
    <AppStateContext.Provider value={{ time, planetPositions }}>
      <Scene />
    </AppStateContext.Provider>
  );
};

export default App;
