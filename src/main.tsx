import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App";

import "./styles.scss";

export const SUN_RADIUS_KM = 696340;
// export const EARTH_RADIUS_KM = 6371;

export const AU_KM = 149597870.7;

export const SUN_RADIUS_AU = (SUN_RADIUS_KM / AU_KM) * 5;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
