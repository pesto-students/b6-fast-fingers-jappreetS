import React from 'react';

import dictionary from './../data/dictionary.json';

const DictionaryContext = React.createContext();

export const DictionaryProvider = ({ children }) => {
  const dictionaryData = {
    easy: [],
    medium: [],
    hard: [],
  };

  dictionary.forEach((word) => {
    if (word.length <= 4) {
      dictionaryData.easy.push(word);
    } else if (word.length >= 5 && word.length <= 8) {
      dictionaryData.medium.push(word);
    } else {
      dictionaryData.hard.push(word);
    }
  });

  return (
    <DictionaryContext.Provider value={dictionaryData}>
      {children}
    </DictionaryContext.Provider>
  );
};

export default DictionaryContext;