import { map } from "ramda";
import { TableHead } from "./TableHead";
import { TableRow } from "./TableRow";

export const TableBody = (users) => {
  const template = `
    ${TableHead()}
    ${map((userInfo) => TableRow(userInfo), users).join("")}
  `;

  return template;
};
