import { randomNumber } from '@/helpers';
import { useEffect, useRef, useCallback } from 'react';

export const sparkleColor = 'hsl(50deg, 100%, 50%)';

const MIN_RANDOM_ID_RANGE = 10000;
const MAX_RANDOM_ID_RANGE = 99999;
const MIN_RANDOM_SIZE_RANGE = 10;
const MAX_RANDOM_SIZE_RANGE = 20;
const MIN_RANDOM_TOP_POSITION = 0;
const MAX_RANDOM_TOP_POSITION = 100;
const MIN_RANDOM_LEFT_POSITION = 0;
const MAX_RANDOM_LEFT_POSITION = 100;

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
      if (typeof window !== 'undefined') {
         if (typeof minDelay === 'number' && typeof maxDelay === 'number') {
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
            if (typeof timeoutId.current === 'number') {
               window.clearTimeout(timeoutId.current);
            }
         }
      };
   }, [minDelay, maxDelay]);

   const cancel = useCallback(() => {
      if (typeof window !== 'undefined') {
         if (typeof timeoutId.current === 'number') {
            window.clearTimeout(timeoutId.current);
         }
      }
   }, []);

   return cancel;
};

export const generateSparkle = () => {
   return {
      id: String(randomNumber(MIN_RANDOM_ID_RANGE, MAX_RANDOM_ID_RANGE)),
      color: sparkleColor,
      size: randomNumber(MIN_RANDOM_SIZE_RANGE, MAX_RANDOM_SIZE_RANGE),
      style: {
         top:
            randomNumber(MIN_RANDOM_TOP_POSITION, MAX_RANDOM_TOP_POSITION) +
            '%',
         left:
            randomNumber(MIN_RANDOM_LEFT_POSITION, MAX_RANDOM_LEFT_POSITION) +
            '%',
         zIndex: 2,
      },
   };
};
