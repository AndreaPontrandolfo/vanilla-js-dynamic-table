import { refreshButtonHandler } from "./handlers";

export const refreshCTAEvent = () => {
  const refreshButton = document.querySelector("#refresh-cta");

  refreshButton?.addEventListener("click", refreshButtonHandler);
};
