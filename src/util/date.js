import {
  isAfter, differenceInMilliseconds, parseISO, format
} from 'date-fns';

const DAY_MS = 24 * 60 * 60 * 1000;
const HOUR_MS = 60 * 60 * 1000;

const millisecondsToDays = ms => {
  let days = Math.floor(ms / DAY_MS);
  let hours = Math.floor((ms - days * DAY_MS) / HOUR_MS);
  let minutes = Math.round((ms - days * DAY_MS - hours * HOUR_MS) / 60000);
  if (minutes === 60) {
    hours += 1;
    minutes = 0;
  }
  if (hours === 24) {
    days += 1;
    hours = 0;
  }
  return { days, hours, minutes };
};

export {
  isAfter,
  differenceInMilliseconds,
  parseISO,
  format,
  millisecondsToDays
};
