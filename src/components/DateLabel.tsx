import { FunctionComponent, useContext } from "react";
import { AppStateContext } from "./App";

const DateLabel: FunctionComponent = () => {
  const { time } = useContext(AppStateContext);

  return <div className="date-label">{time.toDateString()}</div>;
};

export default DateLabel;
