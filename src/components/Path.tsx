import { Billboard, Line, Text } from "@react-three/drei";
import { useContext } from "react";
import { AU_KM } from "../main";
import { distance, midPoint } from "../search";
import { AppStateContext } from "./App";

const Path: React.FunctionComponent = () => {
  const { path } = useContext(AppStateContext);
  return (
    <>
      {path &&
        path
          .slice(0, -1)

          .map((p, i) => (
            //@ts-ignore
            <Line points={[p, path[i + 1]]} color="white" key={i} />
          ))}
    </>
  );
};

export default Path;
