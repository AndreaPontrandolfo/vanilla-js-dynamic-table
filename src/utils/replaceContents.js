export const replaceContents = (oldContentsContainer, newContents) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(
        (() => {
          oldContentsContainer.innerHTML = newContents;
        })()
      );
    } catch (error) {
      reject(error);
    }
  });
};
