import getElementsByLenght from "../../../utils/getElementsByLength";
import { ModalSelector } from "./selectors";

const addRemoveTabLinksActiveClass = (tabId) => {
  const tabLinks =
    getElementsByLenght(`${ModalSelector} [role="tab"]`, 5) || [];

  if (tabLinks.length > 0) {
    tabLinks.forEach((link) => {
      const id = link.getAttribute("aria-controls");
      const isActiveClass = link.classList.contains("active");
      if (id === tabId) {
        link.classList.add("active");
      } else {
        isActiveClass && link.classList.remove("active");
      }
    });
  }
};

export default addRemoveTabLinksActiveClass;
