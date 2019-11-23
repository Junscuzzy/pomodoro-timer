export const SECOND = 1000;
export const MINUTE = SECOND * 60;

/**
 * Increment a length from x to 60
 * @param {integer} length
 * @returns {integer}
 */
export const increment = length => (length >= 60 ? 60 : length + 1);

/**
 * Decrement a length from x to 1
 * @param {integer} length
 * @returns {integer}
 */
export const decrement = length => (length <= 1 ? 1 : length - 1);

/**
 * Transform time in ms to a obj like {minutes, seconds}
 * @param {integer} ms Time in ms
 * @returns {object} like {minutes, seconds}
 */
export const intervalToObj = ms => {
  if (ms > 60 * MINUTE) {
    return { minutes: 60, seconds: 0 };
  }

  if (ms < 0) {
    return { minutes: 0, seconds: 0 };
  }

  // Minutes
  let minutes = 0;
  if (ms >= MINUTE) {
    minutes = Math.floor(ms / MINUTE);
    ms = ms - minutes * MINUTE;
  }

  // Seconds
  let seconds = Math.round(ms / SECOND);

  return { minutes, seconds };
};

/**
 * Transform time in ms to formated date
 * @param {integer} ms time in ms
 * @returns {string} formated date
 */
export const getFormatedDate = ms => {
  const { minutes, seconds } = intervalToObj(ms);
  const addZero = x => (x < 10 ? `0${x}` : `${x}`);
  return `${addZero(minutes)}:${addZero(seconds)}`;
};
