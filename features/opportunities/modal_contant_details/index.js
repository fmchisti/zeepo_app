import getElementByFn from "../../../utils/getElementsByFn";
import debounce from "../../../utils/debounce";
import modalLoaded from "./modalLoaded";
import { ModalSelector } from "./selectors";

const getModal = async () => {
  const modal = {
    element: null,
    isSuccess: false,
    isError: false,
    isLoading: false,
  };

  modal.isLoading = true;
  modal.element = await getElementByFn(ModalSelector);
  modal.isLoading = false;
  modal.isSuccess = true;
  return modal;
};

const injectElement = async () => {
  const modalResponse = await getModal();
  if (!modalResponse.isSuccess) return;
  const modal = modalResponse.element;
  modal.addEventListener("DOMNodeInserted", debounce(modalLoaded(modal), 500));
};

const add_contact_tab = () => {
  injectElement();
};

export default add_contact_tab;
