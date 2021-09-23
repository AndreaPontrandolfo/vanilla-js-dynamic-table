import { map } from "ramda";
import { populateTableByFetch } from "../../populateTableByFetch";
import { replaceTable } from "../../replaceTable";

export const autocompleteTypingEventHandler = (event) => {
  const suggestedResults = event.detail.results;
  if (suggestedResults) {
    const aggregatedUsersDetails = map((result) => result.value, suggestedResults);
    replaceTable(aggregatedUsersDetails);
  }

  if (!suggestedResults) {
    populateTableByFetch();
  }
};
