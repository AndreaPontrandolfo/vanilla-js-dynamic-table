import { downloadCTAEvent, autocompleteTypingEvent } from "./events";

export const attachEvents = async () => {
  downloadCTAEvent();
  autocompleteTypingEvent();
};
