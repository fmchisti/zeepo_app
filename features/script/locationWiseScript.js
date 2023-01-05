import getScriptData from "./api";

export const setScriptLocal = async () => {
  localStorage.removeItem("sheetScript");
  const scripts = (await getScriptData()) || [];
  localStorage.setItem("sheetScript", JSON.stringify(scripts));
  return scripts;
};

const locationWiseScript = async (locationId) => {
  let locationScript;
  const scripts = JSON.parse(localStorage.getItem("sheetScript"));

  if (scripts) {
    locationScript = scripts.filter((script) => {
      return script.LocationIds.split(",").includes(locationId);
    });
    return locationScript;
  } else {
    const serverScript = await setScriptLocal();
    locationScript = serverScript.filter((script) => {
      return script.LocationIds.split(",").includes(locationId);
    });
    return locationScript;
  }
};

export default locationWiseScript;
