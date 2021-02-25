const fs = require('fs');
const dictionary = require('./data/dictionary.json');

const dataDirectory = './src/data';

const dictionaryData = {
  easy: [],
  medium: [],
  hard: [],
};

dictionary.forEach((word) => {
  switch (word.length) {
    case 1:
    case 2:
    case 3:
    case 4:
      dictionaryData.easy.push(word);
      break;
    case 5:
    case 6:
    case 7:
    case 8:
      dictionaryData.medium.push(word);
      break;
    default:
      dictionaryData.hard.push(word);
      break;
  }
});

if (!fs.existsSync(dataDirectory)) {
  fs.mkdirSync(dataDirectory);
}

const stringifyData = data => JSON.stringify(data);

fs.writeFileSync(`${dataDirectory}/easy.json`, stringifyData(dictionaryData.easy));
fs.writeFileSync(`${dataDirectory}/medium.json`, stringifyData(dictionaryData.medium));
fs.writeFileSync(`${dataDirectory}/hard.json`, stringifyData(dictionaryData.hard));
