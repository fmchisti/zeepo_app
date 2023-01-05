import debounce from "../../../utils/debounce";
import apiKey from "./apiKey";
import updateContactById from "../../../fetch/updateContactById";
import { ModalSelector } from "./selectors";
import getElementsByFn from "../../../utils/getElementsByFn";

let updateContact = {
  id: "",
  email: "",
  phone: "",
  customField: {},
};

const getUpdateButton = async () => {
  const updateButton = await getElementsByFn(
    `${ModalSelector} .hl-btn.bg-apple-500`
  );
  updateButton.addEventListener("click", () => {
    setTimeout(() => {
      updateContactById(updateContact.id, apiKey, updateContact);
    }, 2000);
  });
};

const inputHandler = async (e) => {
  const key = e.target.id;
  const value = e.target.value;
  updateContact = {
    ...updateContact,
    customField: { ...updateContact.customField, [key]: value },
  };
};

const setCustomFieldsInputEvent = (tab, contact) => {
  if (tab) {
    updateContact = {
      id: contact.id,
      email: contact.email,
      phone: contact.phone,
    };
    const inputs = [...tab.querySelectorAll("input")];
    inputs.forEach((input) => {
      input.addEventListener("input", debounce(inputHandler, 1000));
    });
  }

  getUpdateButton();
};

export default setCustomFieldsInputEvent;
