const url = `https://script.google.com/macros/s/AKfycbyPV4_uBNty9EQvATRu36gB_mZ-U93lzBf0kyzukz2GbUtO_YzjUEKRgVpv5Gvi7eK8og/exec`;

const getScriptData = async () => {
  const response = await fetch(url);
  const result = await response.json();
  const script = result[0].data;
  return script;
};

export default getScriptData;
