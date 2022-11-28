import React from "react";

export interface AppState {
  time: Date;

  isPlaying: boolean;
  speed: number;

  // Love this pattern 🙄
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setSpeed: React.Dispatch<React.SetStateAction<number>>;

  planetPositions: VSOP87Data;
}

export interface VSOP87Data {
  [key: string]: {
    x: number;
    y: number;
    z: number;
  };
}
