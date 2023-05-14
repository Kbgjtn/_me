export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const range = (start: number, end?: number, step = 1) => {
  let output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

import { useEffect, useRef, useCallback } from "react";

export const useRandomInterval = (
  callback: () => void,
  minDelay: number | null,
  maxDelay: number | null
) => {
  const timeoutId = useRef<null | number>(null);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (typeof minDelay === "number" && typeof maxDelay === "number") {
        const handleTick = () => {
          const nextTickAt = randomNumber(minDelay, maxDelay);
          timeoutId.current = window.setTimeout(() => {
            savedCallback.current();
            handleTick();
          }, nextTickAt);
        };
        handleTick();
      }
    }

    return () => {
      if (typeof window !== undefined) {
        if (typeof timeoutId.current === "number") {
          window.clearTimeout(timeoutId.current);
        }
      }
    };
  }, [minDelay, maxDelay]);

  const cancel = useCallback(() => {
    if (typeof window !== "undefined") {
      if (typeof timeoutId.current === "number") {
        window.clearTimeout(timeoutId.current);
      }
    }
  }, []);

  return cancel;
};
