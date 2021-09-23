import { TableBody } from "./TableBody";
export const Table = (users) => {
  const template = `
    <table id="table" data-testid="table">
      ${TableBody(users)}
    </table>
    `;

  return template;
};
