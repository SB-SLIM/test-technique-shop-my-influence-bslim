export const addToLocalStorage = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key) => {
  const result = window.localStorage.getItem(key);
  if (result) {
    return JSON.parse(result);
  }
  return null;
};

export const removeFromLocalStorage = (key) => {
  window.localStorage.removeItem(key);
};
