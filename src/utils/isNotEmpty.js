import { isEmpty, not } from "ramda";

export const isNotEmpty = (element) => not(isEmpty(element));
