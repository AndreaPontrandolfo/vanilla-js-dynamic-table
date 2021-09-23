import Swal from "sweetalert2";
import { map, flatten, filter, isNil, isEmpty } from "ramda";
import { isNotEmpty } from "./isNotEmpty";
import { useCache } from "./useCache";
import { fetchUsers } from "./fetchUsers";
import { setAutoCompleteInstance } from "./configs/autocompleteConfig";
import { replaceTable } from "./replaceTable";
import { getUserPersonalDetails } from "./getUserPersonalDetails";
import { getRecomputedUsersList } from "./getRecomputedUsersList";
import { setSwalOptions } from "./configs/swalConfigs";

export const populateTableByFetch = async () => {
  const cache = useCache();

  if (!isNil(cache) && !isEmpty(cache)) {
    replaceTable(cache);
    setAutoCompleteInstance(cache);

    return;
  }

  try {
    const randomUserPromises = fetchUsers();
    const apiResponseObjects = await Promise.all(randomUserPromises);
    const usersList = flatten(map(getUserPersonalDetails, apiResponseObjects));
    const cleanedUsersList = filter(isNotEmpty, usersList);
    const recomputedUsersList = getRecomputedUsersList(cleanedUsersList);

    useCache(recomputedUsersList);
    replaceTable(recomputedUsersList);
    setAutoCompleteInstance(recomputedUsersList);
  } catch (error) {
    const { errorAlert } = setSwalOptions("error", error);
    Swal.fire(errorAlert);
  }
};
