const checkbox = { element: document.createElement("div"), isChecked: true };

checkbox.element.className = `flex ml-[20px] mt-[15px] items-center`;
checkbox.element.innerHTML = `
<input data-v-62d091ce="" type="checkbox" class="focus:ring-curious-blue-500 h-5 w-5 text-curious-blue-600 border-gray-300 rounded mr-2 disabled:opacity-50" id="active_address_auto">
<div style="color: black;">Address Auto Complete</div>
`;

checkbox.element.querySelector("input").checked = checkbox.isChecked;

export const activeInactive = () => {
  const autoInputAddress = document.querySelector("#full_address_input");
  const mainInputAddress = document.querySelector(
    "[placeholder='Street Address']"
  );

  if (!autoInputAddress && !mainInputAddress) return;

  if (!checkbox.isChecked) {
    autoInputAddress.style.display = "none";
    mainInputAddress.style.display = "block";
  } else {
    autoInputAddress.style.display = "block";
    mainInputAddress.style.display = "none";
  }
};

checkbox.element.querySelector("input").addEventListener("click", (e) => {
  checkbox.isChecked = e.target.checked;
  activeInactive();
});

const createCheckbox = () => checkbox;
export { checkbox };
export default createCheckbox;
