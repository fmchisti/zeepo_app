import getElementsByFahim from "../../../utils/getElementsByFn";
import createLeadStatusDropdown from "./createLeadStatusDropdown";
import getContactIdFromURL from "../../../utils/getContactIdFromUrl";
import getContactById from "../../../fetch/getContactById";
import getLocationById from "../../../fetch/getLocationById";

const leadStatus = createLeadStatusDropdown();

const add_lead_status = async (route) => {
  const leadSelect = leadStatus.querySelector("select");

  const leftContainer = await getElementsByFahim(".hl_contact-details-left");
  if (!leadStatus.isConnected) {
    leftContainer.prepend(leadStatus);
    const event = new CustomEvent("addLocationId", {
      detail: route,
    });

    leadStatus.dispatchEvent(event);
  }

  const contactId = getContactIdFromURL();
  const location = await getLocationById(route.locationId);
  const contact = await getContactById(contactId, location.apiKey);

  const contactLeadStatus = contact.customField.find(
    (field) => field.id == leadStatus.dataset.customId
  );

  leadSelect.value = contactLeadStatus?.value;
};

export default add_lead_status;
