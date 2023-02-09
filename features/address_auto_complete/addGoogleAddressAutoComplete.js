import { checkbox, activeInactive } from "./createCheckBox";
import { viewAddress } from "./viewMap";
import getElementsByFn from "../../utils/getElementsByFn";
import viewMap from "./viewMap";

let cloneInput;

let options = {
  types: ["address"],
};

const componentForm = {
  street_number: "short_name",
  route: "long_name",
  locality: "long_name",
  administrative_area_level_1: "short_name",
  administrative_area_level_2: "short_name",
  country: "long_name",
  postal_code: "short_name",
  postal_code_suffix: "long_name",
};

const addGoogleAddressAutoComplete = (fields) => {
  const viewMapElement = viewMap();

  if (cloneInput?.isConnected) cloneInput.remove();

  cloneInput = fields["Street Address"].cloneNode(true);
  cloneInput.id = "full_address_input";
  cloneInput.placeholder = "Search your address";
  fields["Street Address"].parentElement.prepend(cloneInput);
  fields["Street Address"].parentElement.prepend(viewMapElement);
  fields["Street Address"].style.display = "none";

  let autocomplete = new google.maps.places.Autocomplete(cloneInput, options);

  activeInactive();

  autocomplete.setFields(["address_component"]);
  autocomplete.addListener("place_changed", () => {
    fillInAddress(autocomplete, fields);
  });
};

async function fillInAddress(autocomplete, fields) {
  const place = autocomplete.getPlace();
  let city, countryVal, zip, street, road, state, county;
  place?.address_components.forEach((addressComp) => {
    const addressType = addressComp.types[0];
    let val = addressComp[componentForm[addressType]];
    if (addressType == "street_number") {
      street = val;
    } else if (addressType == "route") {
      road = street + " " + val;
    } else if (addressType == "locality") {
      city = val;
    } else if (addressType == "administrative_area_level_1") {
      state = val;
    } else if (addressType == "postal_code") {
      zip = val;
    } else if (addressType == "country") {
      countryVal = val;
    } else if (addressType == "administrative_area_level_2") {
      county = val;
    }
  });

  viewAddress.city = city;
  viewAddress.country = countryVal;
  viewAddress.zip = zip;
  viewAddress.street = street;
  viewAddress.road = road;
  viewAddress.state = state;
  viewAddress.county = county;
  viewAddress.fullAddress = `${road}, ${state}, ${zip}`;

  updateInput(fields["Street Address"], `${road}, ${state}, ${zip}`);
  updateInput(fields["City"], city);
  updateInput(fields["Postal Code"], zip);
  updateInput(fields["State"], state);

  updateCountry(countryVal);
}

function updateInput(input, value) {
  const event = new Event("HTMLEvent");
  event.initEvent("input", true, true);
  input.value = value;
  input.dispatchEvent(event);
}

async function updateCountry(country) {
  const countrys = await getElementsByFn(
    ".hl_contact-details-left .dropdown-menu li a",
  );

  [...countrys].forEach((cnt) => {
    if (cnt.innerText.trim().toLowerCase() === country.trim().toLowerCase()) {
      if (cnt) cnt.click();
    }
  });
}

export default addGoogleAddressAutoComplete;
