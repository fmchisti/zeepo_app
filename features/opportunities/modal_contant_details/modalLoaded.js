import showHideTabs from "./showHideTabs";
import addRemoveTabLinksActiveClass from "./addRemoveTabLinksActiveClass";
import getElementsByLenght from "../../../utils/getElementsByLength";
import createNewTab from "./createNewTab";
import createTabLink from "./createTabLink";
import addAdditionalInfo from "./addAdditionalInfo";
import { ModalSelector } from "./selectors";

const tabLink = createTabLink("Additional Info", "tab5-tab", "tab5");
const tab = createNewTab("", "tab5");

tabLink.addEventListener("click", addAdditionalInfo(tab));

const TabLinkHandler = async (e) => {
  const tabId = e.target.getAttribute("aria-controls");
  showHideTabs(tabId);
  addRemoveTabLinksActiveClass(tabId);
};

const setupTabLinksEvent = (args) => {
  const tabLinks =
    getElementsByLenght(`${ModalSelector} [role="tab"]`, 5) || [];

  if (tabLinks.length > 0) {
    tabLinks.forEach((link) => {
      if (link.classList.contains("event-active")) {
        return;
      } else {
        link.classList.add("event-active");
        link.addEventListener("click", TabLinkHandler);
      }
    });
  }
};

// When model will load this function will fire
const modalLoaded = (modal) => {
  return (args) => {
    if (modal.style.display === "none") return;
    if (!tabLink.isConnected) {
      const myTab = modal.querySelector(`${ModalSelector} #myTab`);
      myTab.append(tabLink);
    }

    if (!tab.isConnected) {
      const tabContent = modal.querySelector(`${ModalSelector} #myTabContent`);
      tabContent.append(tab);
    }

    const activeTab = modal.querySelector("[data-toggle='tab'].active");

    if (activeTab) {
      const activeTabId = activeTab.getAttribute("aria-controls");
      showHideTabs(activeTabId);
    }

    setupTabLinksEvent(args);
  };
};

export default modalLoaded;
