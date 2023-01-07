import getScriptData from "./api";

export const setScriptLocal = async (locationId) => {
  localStorage.removeItem("sheetScript_v1");
  const scripts = (await getScriptData(locationId)) || [];
  console.log(scripts);
  localStorage.setItem("sheetScript_v1", JSON.stringify(scripts));
  return scripts;
};

const locationWiseScript = async (locationId) => {
  let locationScript;
  const scripts = JSON.parse(localStorage.getItem("sheetScript_v1"));

  if (scripts) {
    locationScript = scripts;
    return locationScript;
  } else {
    const serverScript = await setScriptLocal(locationId);
    locationScript = serverScript;
    return locationScript;
  }
};

export default locationWiseScript;
