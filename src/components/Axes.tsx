import { Line } from "@react-three/drei";
import { FunctionComponent } from "react";

const AXIS_LENGTH = 1;

const Axes: FunctionComponent = () => {
  return (
    <>
      <Line
        points={[
          [0, 0, 0],
          [AXIS_LENGTH, 0, 0],
        ]}
        color="red"
      />
      <Line
        points={[
          [0, 0, 0],
          [0, AXIS_LENGTH, 0],
        ]}
        color="green"
      />
      <Line
        points={[
          [0, 0, 0],
          [0, 0, AXIS_LENGTH],
        ]}
        color="blue"
      />
    </>
  );
};

export default Axes;
