import { pathOr } from "ramda";

export const getUserPersonalDetails = (userObj) => pathOr({}, ["data", "results"], userObj);
