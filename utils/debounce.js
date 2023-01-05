// handel Debounce
const debounce = (fn, delay) => {
  let fnId;
  return (args) => {
    clearTimeout(fnId);
    fnId = setTimeout(() => {
      fn(args);
    }, delay);
  };
};

export default debounce;
