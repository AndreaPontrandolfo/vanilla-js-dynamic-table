import { mergeRight } from "ramda";

export const aggregatePictureToNamingDetails = ({ picture, name }) => mergeRight(picture, name);
