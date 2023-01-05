import getElementsByFn from "../../utils/getElementsByFn";
import createCheckbox from "./createCheckBox";
import getAddressFields from "./getAddressFields";
import addGoogleAddressAutoComplete from "./addGoogleAddressAutoComplete";

const checkbox = createCheckbox();
let contactTabTimerID;

const addressAutoComplete = async (route) => {
  if (!checkbox.element.isConnected) {
    const targetSelector =
      ".hl_contact-details-left > div > .h-full.overflow-y-auto";
    const left = await getElementsByFn(targetSelector);
    if (left) left.prepend(checkbox.element);
    else console.log("Checkbox target element not fonud");
  }

  const address = await getAddressFields();
  if (address) addGoogleAddressAutoComplete(address);
  else console.log("Address fields not found");

  const contactTabSelector =
    ".hl_contact-details-left [aria-label='Tabs'] > span";
  const contactTab = await getElementsByFn(contactTabSelector);
  contactTab[0].addEventListener("click", async (e) => {
    clearTimeout(contactTabTimerID);
    contactTabTimerID = setTimeout(async function () {
      const isAddress = document.querySelector("#full_address_input");
      if (isAddress) return;
      const address = await getAddressFields();
      addGoogleAddressAutoComplete(address);
    }, 1500);
  });
};

export default addressAutoComplete;
