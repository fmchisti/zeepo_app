import getElementByFn from "../../../utils/getElementsByFn";
import getCustomFields from "../../../fetch/getCustomFields";
import getCustomFieldsWiseInput from "./getCustomFieldsWiseInput";
import showEmptyFieldsCheckBox from "./showHideCustomFields";
import setCustomFieldsInputEvent from "./setCustomFieldsInputEvent";
import apiKey from "./apiKey";
import { ModalSelector } from "./selectors";

const addAdditionalInfo = (tab) => {
  return async (e) => {
    const tab1 = await getElementByFn(`${ModalSelector} #tab1`);
    if (!tab1) return;
    if (!tab1?.__vue__) return console.log("Vue not found");
    if (!tab1?.__vue__?.contact) return console.log("Contact not found");
    const contact = tab1?.__vue__.contact;
    const contactId = contact.id;
    tab.innerHTML = "Loading...";
    const customFields = await getCustomFields(apiKey);
    const tabHtml = await getCustomFieldsWiseInput(customFields, contactId);
    tab.innerHTML = tabHtml;
    const showEmptyChecker = showEmptyFieldsCheckBox(tab);
    setCustomFieldsInputEvent(tab, contact);
    tab.prepend(showEmptyChecker);
  };
};

export default addAdditionalInfo;
