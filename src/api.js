const SECOND = 1000;
const MINUTE = SECOND * 60;

/**
 * Increment a counter from x to 60
 * @param {integer} i
 * @returns {integer}
 */
const increment = i => {
  if (i >= 60) {
    return 60;
  }
  return i + 1;
};

/**
 * Decrement a counter from x to 0
 * @param {integer} i
 * @returns {integer}
 */
const decrement = i => {
  if (i < 1) {
    return 0;
  }
  return i - 1;
};

/**
 * Transform time in ms to a obj like {minutes, seconds}
 * @param {integer} ms Time in ms
 * @returns {object} like {minutes, seconds}
 */
const intervalToObj = ms => {
  // Min
  if (ms > 60 * MINUTE) {
    return { minutes: 60, seconds: 0 };
  }

  // Max
  if (ms < 0) {
    return { minutes: 0, seconds: 0 };
  }

  // Minutes
  let minutes = 0;
  if (ms > MINUTE) {
    minutes = Math.floor(ms / MINUTE);
    ms = ms - minutes * MINUTE;
  }

  // Seconds
  let seconds = Math.round(ms / SECOND);

  return { minutes, seconds };
};

/**
 * Transform minutes to ms
 * @param {integer} minutes minutes counter
 * @returns {integer} time in ms
 */
// const minutesToMs = minutes => minutes * MINUTE;

/**
 * Transform obj like {minutes, seconds} to formated date mm:ss
 * @param {object} obj like {minutes, seconds}
 * @returns {string} formated date
 */
const intervalObjToString = obj => {
  const { minutes, seconds } = obj;
  const addZero = x => (x < 10 ? `0${x}` : `${x}`);
  return `${addZero(minutes)}:${addZero(seconds)}`;
};

/**
 * Transform time in ms to formated date
 * @param {integer} ms time in ms
 * @returns {string} formated date
 */
const getFormatedDate = ms => {
  return intervalObjToString(intervalToObj(ms));
};

export { MINUTE, SECOND, increment, decrement, getFormatedDate };
