export const ButtonBase = (children) => {
  const template = `
    <button class="btn--primary" id="main-cta">
      ${children}
    </button>
  `;

  return template;
};
