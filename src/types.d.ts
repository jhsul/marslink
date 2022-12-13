import React from "react";
import { Vector3 } from "@react-three/fiber";
export interface AppState {
  time: Date;

  isPlaying: boolean;
  speed: number;

  // Love this pattern 🙄
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setSpeed: React.Dispatch<React.SetStateAction<number>>;

  // /** Number of starlink satellites */
  // n: number;
  // setN: React.Dispatch<React.SetStateAction<number>>;

  // /** Radius of the constellation's heliocentric orbit in AU*/
  // r: number;
  // setR: React.Dispatch<React.SetStateAction<number>>;

  shellConfig: ShellConfig;
  setShellConfig: React.Dispatch<React.SetStateAction<ShellConfig>>;

  // energy: number;
  // setEnergy: React.Dispatch<React.SetStateAction<number>>;

  /** Power output of a satellite in watts */
  p: number;
  setP: React.Dispatch<React.SetStateAction<number>>;

  earthPosition: Vector3;
  marsPosition: Vector3;

  satellitePositions: Vector3[];

  path: Vector3[] | null;
  setPath: React.Dispatch<React.SetStateAction<Vector3[] | null>>;
}

export interface ShellConfig {
  currentShell: number;
  shells: Shell[];
}

export interface Shell {
  /** Radius of the shell in AU */
  r: number;

  /** Number of satellites in the shell */
  n: number;
}
