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
    p,
    setP,
    shellConfig,
    setShellConfig,
  } = useContext(AppStateContext);

  // For shorthand use in the JSX
  const { currentShell, shells } = shellConfig;

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
          <br />
          <div className="hbox">
            <select
              value={shellConfig.currentShell}
              onChange={(e) =>
                setShellConfig((sc) => {
                  return {
                    ...sc,
                    currentShell: parseInt(e.target.value),
                  };
                })
              }
            >
              {shellConfig.shells.map((shell, i) => (
                <option key={i} value={i}>{`Shell ${i}`}</option>
              ))}
            </select>
            <a
              style={{ cursor: "pointer" }}
              onClick={() => {
                setShellConfig((sc) => {
                  const newShells = [...sc.shells, { n: 20, r: 1.3 }];
                  return {
                    shells: newShells,
                    currentShell: newShells.length - 1,
                  };
                });
              }}
            >
              ➕
            </a>
            <a
              style={{ cursor: "pointer" }}
              onClick={() =>
                setShellConfig((sc) => {
                  if (sc.shells.length <= 1) return sc;
                  const newShells = [...shellConfig.shells].filter(
                    (_, i) => i !== shellConfig.currentShell
                  );
                  return {
                    shells: newShells,
                    currentShell: newShells.length - 1,
                  };
                })
              }
            >
              ➖
            </a>
          </div>
          <div>n := # of satellites = {shells[currentShell].n}</div>
          <input
            type="range"
            min="1"
            max="50"
            step="1"
            value={shells[currentShell].n}
            onChange={(e) => {
              setShellConfig((sc) => {
                const newShells = [...sc.shells];
                newShells[currentShell].n = parseInt(e.target.value);
                return {
                  ...sc,
                  shells: newShells,
                };
              });
            }}
          />
          <div>r := constellation radius = {shells[currentShell].r} AU</div>
          <input
            type="range"
            min="0.1"
            max="2"
            step="0.01"
            value={shells[currentShell].r}
            onChange={(e) => {
              setShellConfig((sc) => {
                const newShells = [...sc.shells];
                newShells[currentShell].r = parseFloat(e.target.value);
                return {
                  ...sc,
                  shells: newShells,
                };
              });
            }}
          />
        </div>
      )}
    </div>
  );
};

export default UserInterface;
