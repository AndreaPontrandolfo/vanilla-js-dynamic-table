import { downloadButtonHandler } from "./handlers";

export const downloadCTAEvent = () => {
  const button = document.querySelector("#main-cta");

  button?.addEventListener("click", downloadButtonHandler);
};
