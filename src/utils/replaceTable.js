import { Table } from "../components";
import { replaceContents } from "./replaceContents";

export const replaceTable = (newContents) => {
  const table = document.querySelector(".table-container");
  replaceContents(table, Table(newContents));
};
