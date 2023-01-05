export const getCustomFieldValueById = (fieldId, contact) => {
  const customField = contact.customField;
  if (customField.length > 0) {
    const contactField = customField.find((field) => {
      return field.id === fieldId;
    });

    return contactField;
  }
};

export default getCustomFieldValueById;
