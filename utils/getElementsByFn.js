// Get any ghl email by using this function
const getElementsByFahim = (selector) => {
  let timeOutId;
  let elementId;
  return new Promise((resolve) => {
    elementId = setInterval(() => {
      clearTimeout(timeOutId);
      const elements = [...document.querySelectorAll(selector)];
      if (elements.length === 1) {
        clearInterval(elementId);
        return resolve(elements[0]);
      }
      if (elements.length > 1) {
        clearInterval(elementId);
        return resolve(elements);
      }

      timeOutId = setTimeout(() => {
        if (elements.length === 0) {
          clearInterval(elementId);
          return resolve(false);
        }
      }, 10000);
    }, 200);
  });
};

export default getElementsByFahim;
