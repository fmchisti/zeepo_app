const createNewTab = (name = "", id = "") => {
  const div = document.createElement("div");
  div.id = id;
  div.setAttribute("role", "tabpanel");
  div.setAttribute("aria-labelledby", `"${id}-tab"`);
  div.setAttribute("class", "tab-pane fade");
  div.setAttribute("style", "display: none;");
  return div;
};

export default createNewTab;
