import { populateTableByFetch } from "../../populateTableByFetch";
import { loadSkeletons } from "../../loadSkeletons";
import { useCache } from "../../useCache";
import { clearSearchInput } from "../../clearSearchInput";

export const refreshButtonHandler = () => {
  clearSearchInput();
  loadSkeletons();
  useCache({});
  populateTableByFetch();
};
