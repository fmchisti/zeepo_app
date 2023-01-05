import api from "../apiKey";
const URL = "https://rest.gohighlevel.com/v1/locations/";

const apiHeaders = new Headers();
apiHeaders.append("Authorization", `Bearer ${api.agencyApi}`);

const option = {
  method: "GET",
  headers: apiHeaders,
  redirect: "follow",
};

const getLocationById = async (id) => {
  const response = await fetch(URL, option);
  const data = await response.json();
  const locations = data.locations || [];
  const foundedLocation = locations.find((location) => location.id === id);
  return foundedLocation;
};

export default getLocationById;
