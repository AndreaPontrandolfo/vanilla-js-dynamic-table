/**
 * very basic cache. We use this as a primitive form of state management. If data gets passed to the function, it gets set in the cache. Otherwise the function returns the data currently in the cache. We use this mechanism instead of LocalStorage/SessionStorage because we don't need to enforce any kind of persistency for this data, therefore it can stay volatile.
 * @param {object} [data]
 */
export const useCache = (data) => {
  if (data) {
    window.cache = data;
  }
  if (!data) {
    return window.cache;
  }
};
