const checkBoxDom = `
<input type="checkbox" class="focus:ring-curious-blue-500 h-5 w-5 text-curious-blue-600 border-gray-300 rounded mr-2 disabled:opacity-50" checked> 
<span class="text-sm font-medium text-gray-700" >Hide Empty Fields</span>
`;

const showHideEmptyFields = (tab) => {
  if (tab) {
    const formGroup = [...tab.querySelectorAll(".form-group.dropdown")];
    return (e) => {
      const isChecked = e.target.checked;
      formGroup.forEach((group) => {
        const input = group.querySelector("input");
        if (!isChecked) {
          group.style.display = "block";
        } else if (!input.value && isChecked) {
          group.style.display = "none";
        } else {
          return;
        }
      });
    };
  } else {
    return (e) => {
      console.log("No custom fields found");
    };
  }
};

const showEmptyFieldsCheckBox = (tab) => {
  const div = document.createElement("div");
  div.classList.add("mb-2");
  div.innerHTML = checkBoxDom;
  const checkBox = div.querySelector("[type='checkbox']");
  checkBox.addEventListener("click", showHideEmptyFields(tab));
  return div;
};

export default showEmptyFieldsCheckBox;
