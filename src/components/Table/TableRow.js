export const TableRow = ({ thumbnail, first, last }) => {
  const template = `
    <tr data-testid="table-row">
      <td data-testid="thumbnail"><img src="${thumbnail}" alt="Profile Thumbnail" class="thumbnail"/></td>
      <td data-testid="first-name">${first}</td>
      <td data-testid="last-name">${last}</td>
    </tr>
  `;

  return template;
};
