export interface AppState {
  time: Date;

  planetPositions: VSOP87Data;
}

export interface VSOP87Data {
  [key: string]: {
    x: number;
    y: number;
    z: number;
  };
}
