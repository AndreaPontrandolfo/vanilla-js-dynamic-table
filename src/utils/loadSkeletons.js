import { SkeletonsRows } from "../components";
import { replaceContents } from "./replaceContents";

export const loadSkeletons = async () => {
  const container = document.querySelector(".table-container");

  await replaceContents(container, SkeletonsRows());
};
