import { map } from "ramda";
import { aggregatePictureToNamingDetails } from "./aggregatePictureToNamingDetails";

export const getRecomputedUsersList = (users) => map(aggregatePictureToNamingDetails, users);
