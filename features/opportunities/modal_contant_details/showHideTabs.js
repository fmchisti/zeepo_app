import getElementByFn from "../../../utils/getElementsByFn";
import { ModalSelector } from "./selectors";

const showHideTabs = async (tabId) => {
  const tabs =
    (await getElementByFn(`${ModalSelector} #myTabContent > div`)) || [];
  if (tabs.length > 0) {
    tabs.forEach((tab) => {
      if (tab.id === tabId) {
        tab.style.display = "block";
        tab.classList.add("show");
      } else {
        tab.style.display = "none";
      }

      if (tab.classList.contains("row") && tabId === "tab4") {
        tab.style.display = "block";
      }
    });
  }
};

export default showHideTabs;
