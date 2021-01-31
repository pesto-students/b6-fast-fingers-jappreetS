// storageType, 0 = "Session Storage", 1 = "Local Storage"
const setItemInStorage = (key, value, storageType = 0) => {
  if (!!storageType) {
    localStorage.setItem(key, value);
  } sessionStorage.setItem(key, value);
};

const getItemFromStorage = (key, storageType = 0) => {
  let data;
  if (!!storageType) {
    data = localStorage.getItem(key);
  }
  data = sessionStorage.getItem(key);
  return data;
};

export {
  setItemInStorage,
  getItemFromStorage,
};