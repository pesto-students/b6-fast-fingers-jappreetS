import React, { useEffect, useState } from 'react';

import { COLOR_CODES, DIFFICULTY_LEVEL_STRINGS } from './../../constants';

import Counter from './../Counter';
import TextInput from './../../elements/TextInput';

import './style.scss';

const PlayingArea = ({ currentWord, difficultyFactor, getNewWord, increaseDifficultyFactor, onGameOver }) => {
  const [userInput, setUserInput] = useState("");
  const [currentWordTime, setCurrentWordTime] = useState(0);

  useEffect(() => {
    setCurrentWordTime(Math.max(Math.round(currentWord.length / difficultyFactor), 2));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentWord]);

  useEffect(() => {
    if (currentWord === userInput) {
      increaseDifficultyFactor();
      let currentLevel;
      if (difficultyFactor >= 1 && difficultyFactor < 1.5) {
        currentLevel = DIFFICULTY_LEVEL_STRINGS.easy;
      } else if (difficultyFactor >= 1.5 && difficultyFactor < 2) {
        currentLevel = DIFFICULTY_LEVEL_STRINGS.medium;
      } else {
        currentLevel = DIFFICULTY_LEVEL_STRINGS.hard;
      }
      getNewWord(currentLevel);
      setUserInput("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInput]);

  const getCurrentWord = () => {
    const currentWordCharacters = currentWord.toUpperCase().split("");
    const userInputCharacters = userInput.split("");
    return (
      <div className="word color-white">
        {currentWordCharacters.map((char, index) => {
          let charColor;
          if (index < userInput.length) {
            charColor = char === userInputCharacters[index] ? COLOR_CODES.GREEN : COLOR_CODES.PURPLE;
          }
          return (
            <span key={index} style={{ color: charColor }}>{char}</span>
          )
        })}
      </div>
    )
  };

  const handleInputChange = event => {
    const { value } = event.target;
    setUserInput(value.toUpperCase());
  };

  return (
    <div className="PlayingArea d-flex flex-direction-column align-items-center">
      <Counter
        timeForWord={currentWordTime}
        word={currentWord}
        onGameOver={onGameOver}
      />
      {getCurrentWord()}
      <TextInput
        value={userInput}
        onChange={handleInputChange}
      />
    </div>
  )
};

export default PlayingArea;
