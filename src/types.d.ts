import React from "react";
import { Vector3 } from "@react-three/fiber";
export interface AppState {
  time: Date;

  isPlaying: boolean;
  speed: number;

  // Love this pattern 🙄
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setSpeed: React.Dispatch<React.SetStateAction<number>>;

  /** Number of starlink satellites */
  n: number;
  setN: React.Dispatch<React.SetStateAction<number>>;

  /** Radius of the constellation's heliocentric orbit in AU*/
  r: number;
  setR: React.Dispatch<React.SetStateAction<number>>;

  // energy: number;
  // setEnergy: React.Dispatch<React.SetStateAction<number>>;

  /** Power output of a satellite in watts */
  p: number;
  setP: React.Dispatch<React.SetStateAction<number>>;

  earthPosition: Vector3;
  marsPosition: Vector3;

  satellitePositions: Vector3[];
}
