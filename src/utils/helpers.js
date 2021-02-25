import { STORAGE_TYPES, STORAGE_TYPE_VALUES } from "./../constants";

// storageType, "session_storage" = "Session Storage", "local_storage" = "Local Storage"
const setItemInStorage = (key, value, storageType = STORAGE_TYPES.SESSION_STORAGE) => {
  if (!!STORAGE_TYPE_VALUES[storageType]) {
    localStorage.setItem(key, value);
  } else {
    sessionStorage.setItem(key, value);
  }
};

const getItemFromStorage = (key, storageType = STORAGE_TYPES.SESSION_STORAGE) => {
  let data;
  if (!!STORAGE_TYPE_VALUES[storageType]) {
    data = localStorage.getItem(key);
  } else {
    data = sessionStorage.getItem(key);
  }
  return data;
};

const generateWord = dictionary => {
  const randomNumber = Math.floor(Math.random() * dictionary.length);
  return dictionary[randomNumber];
};

const convertSecondsToMMSS = totalSeconds => {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${minutes}:${seconds}`;
};

const getHighestScoreObj = (scoresArr) => {
  const maxScore = Math.max(...scoresArr.map(obj => obj.score));
  return scoresArr.find(currentScore => currentScore.score === maxScore);
}

export {
  setItemInStorage,
  getItemFromStorage,
  generateWord,
  convertSecondsToMMSS,
  getHighestScoreObj,
};