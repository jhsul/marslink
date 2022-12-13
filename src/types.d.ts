import React from "react";
import { Vector3 } from "@react-three/fiber";
export interface AppState {
  time: Date;

  isPlaying: boolean;
  speed: number;

  // Love this pattern 🙄
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setSpeed: React.Dispatch<React.SetStateAction<number>>;

  shellConfig: ShellConfig;
  setShellConfig: React.Dispatch<React.SetStateAction<ShellConfig>>;

  // energy: number;
  // setEnergy: React.Dispatch<React.SetStateAction<number>>;

  search: "astar" | "greedy";
  setSearch: React.Dispatch<React.SetStateAction<"astar" | "greedy">>;

  /** Range of a satellite in AU */
  range: number;
  setRange: React.Dispatch<React.SetStateAction<number>>;

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
