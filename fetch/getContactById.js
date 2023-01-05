const getContactById = async (id, apiKey) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${apiKey}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const url = `https://rest.gohighlevel.com/v1/contacts/${id}`;
  const response = await fetch(url, requestOptions);
  const data = await response.json();
  const contact = data.contact;
  return contact;
};

export default getContactById;
