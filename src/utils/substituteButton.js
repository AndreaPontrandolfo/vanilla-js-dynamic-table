import { RefreshButtonContents } from "../components";
import { refreshCTAEvent } from "./events";
import { downloadButtonHandler } from "./events/handlers";

export const substituteButton = () => {
  const originalButton = document.querySelector("#main-cta");
  if (originalButton) {
    originalButton.id = "refresh-cta";
    originalButton.removeEventListener("click", downloadButtonHandler);
    originalButton.innerHTML = RefreshButtonContents();
  }
  refreshCTAEvent();
};
