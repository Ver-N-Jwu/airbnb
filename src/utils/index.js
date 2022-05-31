export const throttle = (callback, ms) => {
  let timer = null;

  return (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        callback(...args);
      }, ms);
    }
  };
};
