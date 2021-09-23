import { populateTableByFetch } from "../../populateTableByFetch";
import { substituteButton } from "../../substituteButton";
import { loadSkeletons } from "../../loadSkeletons";
import { enableInput } from "../../enableSearchInput";

export const downloadButtonHandler = () => {
  enableInput();
  loadSkeletons();
  populateTableByFetch();
  substituteButton();
};
