const getElemetByLength = (selector, length, classStack = 0) => {
  const elements = [...document.querySelectorAll(selector)];
  if (elements.length === length) return elements;
  if (classStack === 100) return false;
  classStack++;
  setTimeout(() => {
    getElemetByLength(selector, classStack, length);
  }, 300);
};

export default getElemetByLength;
