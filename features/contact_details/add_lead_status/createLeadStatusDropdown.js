import getLocationById from "../../../fetch/getLocationById";
import getCustomFields from "../../../fetch/getCustomFields";
import updateContact from "./updateContact";

let locationDetails, leadStatusCustomFields;

const createLeadStatusDropdown = () => {
  const div = document.createElement("div");
  div.classList = "pipeline-option";
  div.innerHTML = `
  <div class="label">
  <label class="hl-text-input-label block text-sm font-medium text-gray-700 mb-1" for="pipelineStatus">Lead Status:</label>
  </div>
  <select value="Loading..." id="pipelineStatus" name="pipelineStatus" class="hl-text-input shadow-sm focus:ring-curious-blue-500 focus:border-curious-blue-500 block w-full sm:text-sm border-gray-300 rounded disabled:opacity-50 text-gray-800 ">
  <option value="Loading..."> Select One </option>
  </select>

  <input id="stage_update_btn" class="hl-btn my-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-apple-500 hover:bg-apple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-apple-500" type="submit" value="Update Stage">
  `;

  div.addEventListener("addLocationId", async (e) => {
    const location = (await getLocationById(e.detail.locationId)) || {};
    const customFields = (await getCustomFields(location.apiKey)) || [];
    locationDetails = location;
    leadStatusCustomFields = customFields.find(
      (field) => field.name === "Lead Status"
    );
    div.dataset.customId = leadStatusCustomFields.id;

    const pickList = leadStatusCustomFields.picklistOptions;
    const select = div.querySelector("select");
    const prevValue = select.value;
    select.innerHTML = "";

    select.innerHTML += pickList
      .map((list, index) => {
        return `
      <option id=${index}>${list}</option>
      `;
      })
      .join(" ");

    select.value = prevValue;
  });

  const updateButton = div.querySelector("#stage_update_btn");
  updateButton.addEventListener("click", (e) => {
    const select = div.querySelector("select");
    updateContact(select.value, locationDetails, leadStatusCustomFields, e);
  });

  return div;
};

export default createLeadStatusDropdown;
