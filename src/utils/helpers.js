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