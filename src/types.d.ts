import React from "react";
import { Vector3 } from "@react-three/fiber";
export interface AppState {
  time: Date;

  isPlaying: boolean;
  speed: number;

  // Love this pattern 🙄
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setSpeed: React.Dispatch<React.SetStateAction<number>>;

  earthPosition: Vector3;
  marsPosition: Vector3;

  satellitePositions: Vector3[];
}
