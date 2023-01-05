const getCustomFields = async (apiKey) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${apiKey}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const url = `https://rest.gohighlevel.com/v1/custom-fields/`;
  const response = await fetch(url, requestOptions);
  const data = await response.json();
  const customFields = data.customFields;
  return customFields;
};

export default getCustomFields;
