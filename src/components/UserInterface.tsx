import { FunctionComponent, useContext, useState } from "react";
import { AppStateContext } from "./App";

const UserInterface: FunctionComponent = () => {
  const { time, isPlaying, setIsPlaying, speed, setSpeed } =
    useContext(AppStateContext);

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
            <div>{time.toDateString()}</div>
            <div>{`playback speed: ${speed} days/sec`}</div>
            <div className="hbox">
              <a
                onClick={() => setSpeed((n: number) => Math.max(n - 1, -10))}
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
                onClick={() => setSpeed((n: number) => Math.min(n + 1, 10))}
                style={{ cursor: "pointer" }}
              >
                ⏩
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInterface;
