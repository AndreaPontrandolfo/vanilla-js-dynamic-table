export const SkeletonsRow = (randomNumber1, randomNumber2) => {
  const template = `
    <tr>
      <td>
        <div class="skeleton skeleton--circle"></div>
      </td>
      <td>
        <div class="skeleton skeleton--line" style="width: ${randomNumber1}px;"></div>
      </td>
      <td>
        <div class="skeleton skeleton--line" style="width: ${randomNumber2}px;"></div>
      </td>
    </tr>
`;

  return template;
};
