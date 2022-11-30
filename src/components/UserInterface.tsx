import { FunctionComponent, useContext, useState } from "react";
import { AppStateContext } from "./App";

const MAX_PLAYBACK_SPEED = 20;

const UserInterface: FunctionComponent = () => {
  const {
    time,
    isPlaying,
    setIsPlaying,
    speed,
    setSpeed,
    n,
    setN,
    r,
    setR,
    p,
    setP,
  } = useContext(AppStateContext);

  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <div className="ui-container">
      {isCollapsed ? (
        <div
          className="ui-collapsed"
          onMouseEnter={() => setIsCollapsed(false)}
        >
          🚀
        </div>
      ) : (
        <div className="ui" onMouseLeave={() => setIsCollapsed(true)}>
          <div className="vbox" style={{ paddingTop: "20pt" }}>
            <div>{`playback speed: ${speed} days/sec`}</div>
            <div className="hbox">
              <a
                onClick={() => {
                  setSpeed((n: number) => Math.max(n - 1, -MAX_PLAYBACK_SPEED));
                  setIsPlaying(true);
                }}
                style={{ cursor: "pointer" }}
              >
                ⏪
              </a>
              <a
                onClick={() => setIsPlaying((b: boolean) => !b)}
                style={{ cursor: "pointer" }}
              >
                {isPlaying ? "⏸️" : "▶️"}
              </a>
              <a
                onClick={() => {
                  setSpeed((n: number) => Math.min(n + 1, MAX_PLAYBACK_SPEED));
                  setIsPlaying(true);
                }}
                style={{ cursor: "pointer" }}
              >
                ⏩
              </a>
            </div>
            <br />
            <div>n := # of satellites = {n}</div>
            <input
              type="range"
              value={n}
              min="1"
              max="50"
              step="1"
              onChange={(e) => setN(parseInt(e.currentTarget.value))}
            />
            <div>r := constellation radius = {r} AU</div>
            <input
              type="range"
              value={r}
              min="0.1"
              max="2"
              step="0.01"
              onChange={(e) => setR(parseFloat(e.currentTarget.value))}
            />
          </div>
          <div>p := power output = {p} W</div>
          <input
            type="range"
            value={p}
            min="0.1"
            max="2"
            step="0.05"
            onChange={(e) => setP(parseFloat(e.currentTarget.value))}
          />
        </div>
      )}
    </div>
  );
};

export default UserInterface;
