import { autocompleteTypingEventHandler } from "./handlers/autocompleteTypingEventHandler";

export const autocompleteTypingEvent = () => {
  const autoComplete = document.querySelector("#autoComplete");

  autoComplete?.addEventListener("autoComplete", autocompleteTypingEventHandler);
};
