let url = `https://us-central1-zeepo-dashboard-manager.cloudfunctions.net/api/script`;

const getScriptData = async (locationid) => {
  url = `${url}/${locationid}`;
  const response = await fetch(url);
  const result = await response.json();
  console.log(url);
  console.log(result);

  return result;
};

export default getScriptData;
