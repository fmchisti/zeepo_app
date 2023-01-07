import contact_details from "./features/contact_details";
import addScriptTab from "./features/script";
import state from "./features/script/state";
import addressAutoComplete from "./features/address_auto_complete";

const locationIdAccess = ["cnrAk8VllnCjCwLobuut"];

const routeWiseActionCreate = (route) => {
  if (!route) return;
  if (!locationIdAccess.includes(route.locationId)) return;

  switch (route?.activePage) {
    case "contact_detail-v2":
      addScriptTab(route);
      break;
    case "smart-list-v2":
      state.contactId = "";
      break;
    default:
      return false;
  }
};

export default routeWiseActionCreate;
