import { RefreshIcon } from "../../assets/icons/icon-refresh";

export const RefreshButtonContents = () => {
  const template = `
    ${RefreshIcon} <span class="btn--primary__text">Refresh</span>
  `;

  return template;
};
