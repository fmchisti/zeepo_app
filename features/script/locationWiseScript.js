import getScriptData from "./api";

export const setScriptLocal = async (locationId) => {
  localStorage.removeItem("sheetScript_v1");
  const scripts = (await getScriptData(locationId)) || [];
  localStorage.setItem("sheetScript_v1", JSON.stringify(scripts));
  return scripts;
};

const locationWiseScript = async (locationId) => {
  console.log(`Helo your location id is ${locationId}`);
  const scripts = JSON.parse(localStorage.getItem("sheetScript_v1")) || [];
  console.log(`Helo your Script Is  ${scripts}`);
  if (scripts.length) return scripts;
  const serverScript = await setScriptLocal(locationId);
  return serverScript;
};

export default locationWiseScript;
