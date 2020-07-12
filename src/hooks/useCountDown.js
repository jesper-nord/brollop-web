import { useState, useEffect, useCallback } from 'react';
import { isAfter, differenceInMilliseconds, millisecondsToDays } from '../util/date';

export const useCountDown = (untilDate, resolution = 5000) => {
  const [diff, setDiff] = useState({ days: 0, hours: 0, minutes: 0 });

  const updateDiff = useCallback(() => {
    setDiff(millisecondsToDays(differenceInMilliseconds(untilDate, new Date())));
  }, [untilDate]);

  useEffect(() => {
    updateDiff();
    const interval = setInterval(() => {
      updateDiff();
    }, resolution);
    return () => clearInterval(interval);
  }, [updateDiff, resolution]);

  if (isAfter(new Date(), untilDate)) {
    return [0, 0, 0];
  }

  return [diff.days, diff.hours, diff.minutes];
};
