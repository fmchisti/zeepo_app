import getCustomFieldValue from "./getCustomFieldValueById";
import getContactById from "../../../fetch/getContactById";
import apiKey from "./apiKey";

const createField = (field, contacts) => {
  const type = field.dataType;
  const addinfo = getCustomFieldValue(field.id, contacts);
  const value = addinfo?.value ? addinfo?.value : "";
  const isActive = addinfo?.value ? "" : `style="display: none;"`;

  return `
    <div class="form-group dropdown" ${isActive} > 
    <span class="text-sm font-medium text-gray-700">${field.name}</span>
    <input value="${value}" id="${field.id}" type="text" placeholder="${field.placeholder}" class="mt-1 shadow-sm focus:ring-curious-blue-500 focus:border-curious-blue-500 block w-full sm:text-sm border-gray-300 rounded-md text-gray-800 msgsndr2 pristine valid touched">
    </div>
    `;

  // if (type === "TEXT") {
  //   return `
  //   <div class="form-group dropdown"  >
  //   <span class="text-sm font-medium text-gray-700">${field.name}</span>
  //   <input value="${value}" id="${field.id}" type="text" placeholder="${field.placeholder}" class="mt-1 shadow-sm focus:ring-curious-blue-500 focus:border-curious-blue-500 block w-full sm:text-sm border-gray-300 rounded-md text-gray-800 msgsndr2 pristine valid touched">
  //   </div>
  //   `;
  // }

  // return "";
};

const getCustomFieldsWiseInput = async (customFields = [], contactId) => {
  let fields;
  if (customFields.length > 0) {
    const contacts = await getContactById(contactId, apiKey);
    fields = customFields
      .map((field) => createField(field, contacts))
      .join(" ");
  }
  return fields;
};

export default getCustomFieldsWiseInput;
