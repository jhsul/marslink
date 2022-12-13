import { FunctionComponent, useContext } from "react";
import { AppStateContext } from "./App";

const Header: FunctionComponent = () => {
  const { time, path } = useContext(AppStateContext);

  return (
    <div className="header">
      <div>{time.toDateString()}</div>
      {path ? (
        <div style={{ color: "green" }}>{`Connected`}</div>
      ) : (
        <div style={{ color: "red" }}>Not Connected</div>
      )}
    </div>
  );
};

export default Header;
