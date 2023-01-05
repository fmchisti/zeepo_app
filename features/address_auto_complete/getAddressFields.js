import getElementsByFn from "../../utils/getElementsByFn";

const requiredInput = ["Street Address", "State", "Postal Code", "City"];

const getAddressFields = async () => {
  const inputs = await getElementsByFn(
    ".hl_contact-details-left input.hl-text-input"
  );

  const address = {};
  const addressFields = [...inputs].filter((input, index) => {
    const placeholder = input.placeholder;
    if (requiredInput.includes(placeholder)) {
      address[placeholder] = input;
      return true;
    }
  });

  address.all = addressFields;

  return address;
};

export default getAddressFields;
