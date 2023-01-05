import contact_details from "./features/contact_details";
import addScriptTab from "./features/script";
import addressAutoComplete from "./features/address_auto_complete";

const locationIdAccess = [];

const routeWiseActionCreate = (route) => {
  if (!route) return;

  console.log("Yes!!!!!!!!!!");

  switch (route?.activePage) {
    case "contact_detail-v2":
      addScriptTab(route);
      break;
    default:
      return false;
  }
};

export default routeWiseActionCreate;
