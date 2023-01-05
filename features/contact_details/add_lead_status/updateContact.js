import getContactById from "../../../fetch/getContactById";
import getContactIdFromURL from "../../../utils/getContactIdFromUrl";
import updateContactById from "../../../fetch/updateContactById";

const updateContact = async (value, location, leadStatus, e) => {
  const contactId = getContactIdFromURL();
  const button = e.currentTarget;

  button.value = "Updating...";
  const contact = await getContactById(contactId, location.apiKey);
  await updateContactById(contactId, location.apiKey, {
    email: contact.email,
    phone: contact.phone,
    customField: {
      [leadStatus.id]: value,
    },
  });

  button.value = "Success";

  setTimeout(function () {
    button.value = "Update Stage";
  }, 500);
};

export default updateContact;
