const getScriptData = async (locationid) => {
  let url = `https://us-central1-zeepo-dashboard-manager.cloudfunctions.net/api/script/${locationid}`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
};

export default getScriptData;
