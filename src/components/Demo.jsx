// import { useEffectOnce } from "react-use";
import { useEffectOnce } from "../hooks/useEffectOnce";

export const Demo = () => {
  useEffectOnce(() => {
    console.log("running on mount");
    return () => {
      console.log("Code clean up on Unmount");
    };
  });

  return <div>Demo USeEffectOnce</div>;
};
