import { times } from "ramda";
import { randomUser } from "../services/randomUser";

export const fetchUsers = () => {
  const getUsersBatch = () => randomUser.fetchUsersBatch();
  const allUsersBatches = times(getUsersBatch, 5);

  return allUsersBatches;
};
