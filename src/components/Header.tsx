import { FunctionComponent, useContext } from "react";
import { getPathLength } from "../physics";
import { distance } from "../search";
import { AppStateContext } from "./App";

const Header: FunctionComponent = () => {
  const { time, path } = useContext(AppStateContext);

  return (
    <div className="header">
      <div>{time.toDateString()}</div>
      {path ? (
        <div style={{ color: "green" }}>{`Connected - ${getPathLength(
          path
        ).toFixed(4)} AU`}</div>
      ) : (
        <div style={{ color: "red" }}>Not Connected</div>
      )}
    </div>
  );
};

export default Header;
