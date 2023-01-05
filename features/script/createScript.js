import getContectData from "./getContectData";

const createScript = (script) => {
  const data = getContectData();
  const contact = data.contact.data;
  const user = data.user;

  user.main_data = "";

  contact.birthday = contact?.dateOfBirth
    ? contact?.dateOfBirth.split("-")[1] +
      "/" +
      contact?.dateOfBirth.split("-")[2] +
      "/" +
      contact?.dateOfBirth.split("-")[0]
    : "Not Found";

  let scriptTemplate = eval("`" + script + "`");
  return scriptTemplate;
};
export default createScript;
