import getScriptData from "./api";

export const setScriptLocal = async (locationId) => {
  localStorage.removeItem("sheetScript");
  const scripts = (await getScriptData(locationId)) || [];
  console.log(scripts);
  localStorage.setItem("sheetScript", JSON.stringify(scripts));
  return scripts;
};

const locationWiseScript = async (locationId) => {
  let locationScript;
  const scripts = JSON.parse(localStorage.getItem("sheetScript"));

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
