import { useEffect, useRef } from "react";

export function useEffectOnce(callbackFn) {
  useEffect(() => {
    return callbackFn();
  });
}
