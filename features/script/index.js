import getElementsByFn from "../../utils/getElementsByFn";
import locationWiseScript, { setScriptLocal } from "./locationWiseScript";
import createScript from "./createScript";
import state from "./state";

const url = new URL(location.href);
setScriptLocal(url.pathname.split("/")[3]);

const customTabContent = document.createElement("div");
customTabContent.classList.add("custom-tab-content", "tab-content");
customTabContent.style.padding = "2rem";

const customTabClickEvent = (tabItem, script, tabContent) => {
  tabItem.addEventListener("click", (e) => {
    const contactScript = createScript(script.script);
    customTabContent.innerHTML = `<div class="script-content">${contactScript}</div>`;
    tabContent.style.display = "none";
    customTabContent.style.display = "block";
    console.log("Button Clicked");
  });
};

const addDefultTabItemCustomEvent = (rightSideElement, tabContent) => {
  const tabSelector = ".nav-item:not(.custom-tab-item)";
  const tabitem = rightSideElement.querySelectorAll(tabSelector);
  tabitem.forEach((tab) => {
    tab.addEventListener("click", () => {
      setTimeout(function () {
        tabContent.style.display = "block";
      }, 200);
      customTabContent.style.display = "none";
    });
  });
};

const apendCustomTabContent = (rightSideElementTab) => {
  if (customTabContent.isConnected) return;
  rightSideElementTab.append(customTabContent);
};

const removeAllActiveClass = (rightSideElement) => {
  const tabs = rightSideElement.querySelectorAll(".nav-item a");
  tabs.forEach((tab) => {
    if (tab.classList.contains("active")) {
      tab.classList.remove("active");
    }

    tab.addEventListener("click", (e) => {
      setTimeout(function () {
        tabs.forEach((t) => {
          if (t.classList.contains("active")) {
            t.classList.remove("active");
          }
        });
        e.target.classList.add("active");
      }, 300);
    });
  });

  tabs[0].classList.add("active");
};

const addScriptTab = async (route) => {
  if (!route.params["contact_id"]) return;
  if (state.contactId === route.params["contact_id"]) return;
  state.contactId = route.params["contact_id"];

  const scripts = await locationWiseScript(route.params.location_id);
  const firstScript = scripts[scripts.length - 1].script;
  if (!scripts.length > 0) return;

  const tabSelector = ".hl_contact-details-right-tabs";
  const rightSideElement = await getElementsByFn(".hl_contact-details-right");
  const navTabs = rightSideElement.querySelector(".nav.nav-tabs");
  const tabContent = rightSideElement.querySelector(".tab-content");
  tabContent.style.display = "none";

  const rightSideElementTab = rightSideElement.querySelector(tabSelector);

  if (scripts.length > 0 && !navTabs.dataset.customTabs) {
    scripts.forEach((script) => {
      const tabItem = document.createElement("li");
      tabItem.dataset.customTabItem = script.id;
      tabItem.classList.add("nav-item", "custom-tab-item");
      tabItem.innerHTML = `
      <a id=${script.id} data-toggle="tab"  role="tab" aria-selected="false" class="nav-link">${script.name}</a> 
      `;

      customTabClickEvent(tabItem, script, tabContent);
      navTabs.prepend(tabItem);
    });

    navTabs.dataset.customTabs = "added";
    setTimeout(function () {
      const myScript = createScript(firstScript);
      customTabContent.innerHTML = `<div class="script-content">${myScript}</div>`;
    }, 3000);
  } else {
    setTimeout(function () {
      const myScript = createScript(firstScript);
      customTabContent.innerHTML = `<div class="script-content">${myScript}</div>`;
    }, 1500);
  }

  removeAllActiveClass(rightSideElement);
  apendCustomTabContent(rightSideElementTab);
  addDefultTabItemCustomEvent(rightSideElement, tabContent);
};

export default addScriptTab;
