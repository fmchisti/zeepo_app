const getContactIdFromURL = () => {
  const url = new URL(location.href);
  const path = url.pathname;
  if (!path) return false;

  const contactId = path.split("/").pop();

  return contactId;
};

export default getContactIdFromURL;
