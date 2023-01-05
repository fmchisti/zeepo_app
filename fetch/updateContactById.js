const updateContactById = async (id, apiKey, body) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${apiKey}`);
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    redirect: "follow",
    body: JSON.stringify(body),
    redirect: "follow",
  };

  const url = `https://rest.gohighlevel.com/v1/contacts/${id}`;
  const response = await fetch(url, requestOptions);
  const data = await response.json();
  const contact = data;
  return contact;
};

export default updateContactById;
